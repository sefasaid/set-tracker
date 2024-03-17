import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DataService } from 'src/app/services/data.service';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { addCircleOutline, checkmarkCircle } from 'ionicons/icons';
import { BehaviorSubject, Observable, debounceTime, map, switchMap } from 'rxjs';
import { Exercise } from 'src/app/types/exercises';
@Component({
  selector: 'app-add-exercise',
  standalone: true,
  imports: [IonicModule, FormsModule, ScrollingModule, CommonModule],
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.scss'],
})
export class AddExerciseComponent implements OnInit {

  public name: string = '';
  public description: string = '';
  public searchText$ = new BehaviorSubject<string>('');
  public exercises$: Observable<Array<Exercise>>;
  public selectedList$ = this.dataService.selectedList$
  constructor(
    private modalCtrl: ModalController,
    private dataService: DataService
  ) {
    addIcons({ addCircleOutline, checkmarkCircle });
    this.exercises$ = this.searchText$.pipe(
      debounceTime(250),
      switchMap(query => this.dataService.exercises$.pipe(
        map(exercises => {
          if (query.length > 0)
            return exercises.filter(exercise => exercise.name.toLowerCase().includes(query));
          return exercises;
        })
      ))
    );
  }

  ngOnInit() {
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss({ name: this.name, description: this.description }, 'confirm');
  }

  onSearch(event: any) {
    this.searchText$.next(event.target.value.toLowerCase())
  }
  addToList(exercise: Exercise) {
    const selectedList = this.selectedList$.getValue();
    const index = selectedList?.exercises?.findIndex(_exercise => exercise.id === _exercise.id);
    if (selectedList && !selectedList?.exercises) {
      selectedList.exercises = [exercise];
      return
    } else {
      if (index === -1) {
        selectedList?.exercises?.push(exercise);
      } else {
        if (index) {
          selectedList?.exercises?.splice(index, 1)
        }
      }
    }

    this.dataService.selectedList$.next(selectedList);
    this.dataService.updateExercises();
  }
  isIncluded(exercise: Exercise) {
    const selectedList = this.selectedList$.getValue();
    if (selectedList?.exercises) {
      return selectedList?.exercises?.filter(_exercise => _exercise.id === exercise.id).length > 0
    }
    return false
  }
}
