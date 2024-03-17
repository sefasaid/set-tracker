import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, tap } from 'rxjs';
import { Exercise, List, Sets } from '../types/exercises';
import { HttpClient } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public exercisesList$ = new BehaviorSubject<Array<List>>([]);
  public exercises$ = new BehaviorSubject<Array<Exercise>>([]);
  public selectedList$ = new BehaviorSubject<List | null>(null);
  public sets$ = new BehaviorSubject<Array<Sets>>([]);
  constructor(
    private http: HttpClient
  ) {
    this.exercisesList$.next(
      JSON.parse(localStorage.getItem('exercisesList') || '[]')
    );

    if (!localStorage.getItem('exercises')) {
      this.http
        .get('https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json')
        .pipe(tap(res => localStorage.setItem('exercises', JSON.stringify(res))))
        .subscribe(res => this.exercises$.next(res as Exercise[]));
    } else {
      this.exercises$.next(JSON.parse(localStorage.getItem('exercises') as string));
    }
    if (!!localStorage.getItem('sets')) {
      this.sets$.next(JSON.parse(localStorage.getItem('sets') as string));
    }
  }

  addToExercisesList(exercise: List) {
    const list = this.exercisesList$.getValue()
    list.push(exercise);
    localStorage.setItem('exercisesList', JSON.stringify(list))
    this.exercisesList$.next(list);
  }

  getExerciseList(id: string) {
    return this.exercisesList$.getValue().find(exercises => exercises.id === id) ?? null;
  }
  updateExercises() {
    const exercisesList = this.exercisesList$.getValue().map(_exerciseList => {
      const selectedList = this.selectedList$.getValue();
      if (_exerciseList.id === selectedList?.id) {
        if (selectedList != null)
          _exerciseList = selectedList;
      }
      return _exerciseList;
    })
    localStorage.setItem('exercisesList', JSON.stringify(exercisesList))
    this.exercisesList$.next(exercisesList);
  }

  getExercise(id: string) {
    return this.exercises$.getValue().find(exercise => exercise.id === id) ?? null;
  }
  getReps({ exerciseId, listId }: { exerciseId: string, listId: string }) {
    return this.sets$.pipe(
      map(sets => {
        return sets.filter(set => set.exerciseId === exerciseId && set.listId === listId)
      }),
      map(sets => {
        return sets.reduce((acc, set) => {
          const date = new Date(set.date).toISOString();
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push(set);
          return acc;
        }, {} as { [key: string]: Sets[] })
      }),
      map(sets => {
        return Object.keys(sets).map(key => {
          return {
            date: key,
            sets: sets[key]
          }
        }).map(({ date, sets }) => {
          return {
            date: date,
            set: sets[0]
          }
        }).sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        })
      })
    )
  }

  addReps({ exerciseId, listId, reps, weight }: { exerciseId: string, listId: string, reps: number, weight: number }) {
    const set = this.sets$.getValue().find(set => set.exerciseId === exerciseId && set.listId === listId && new Date(set.date).toLocaleDateString() === new Date().toLocaleDateString());
    if (!set) {
      const _sets = [...this.sets$.getValue(), { listId, exerciseId, logs: [{ reps, weight, date: new Date() }], date: new Date(), id: uuidv4() }];
      this.sets$.next(_sets);
      localStorage.setItem('sets', JSON.stringify(_sets))
      return
    }

    const _sets = this.sets$.getValue().map(_set => {
      if (set.id === _set.id) {
        _set.logs.push({ reps, weight, date: new Date() });
      }
      return _set;
    })
    this.sets$.next(_sets);
    localStorage.setItem('sets', JSON.stringify(_sets))
  }
  deleteExerciseFromList(id: string, listId: string) {
    const list = this.exercisesList$.getValue().map(_list => {
      if (_list.id === listId) {
        _list.exercises = _list?.exercises?.filter(exercise => exercise.id !== id);
      }
      return _list;
    })
    localStorage.setItem('exercisesList', JSON.stringify(list))
    this.exercisesList$.next(list);
    this.sets$.next(this.sets$.getValue().filter(set => !(set.exerciseId === id && set.listId === listId)));
    localStorage.setItem('sets', JSON.stringify(this.sets$.getValue()))
  }
  getSummary() {
    return combineLatest([
      this.exercisesList$,
      this.sets$
    ]).pipe(
      map(([exercisesList, sets]) => {
        return {
          exerciseCount: exercisesList.map(exerciseList => exerciseList.exercises?.length ?? 0).reduce((a, b) => a + b, 0),
          setCount: sets.map(set => set.logs.length).reduce((a, b) => a + b, 0),
          repCount: sets.map(set => set.logs.map(log => log.reps ?? 0).reduce((a, b) => a + b, 0)).reduce((a, b) => a + b, 0)
        }
      })
    )
  }
}
