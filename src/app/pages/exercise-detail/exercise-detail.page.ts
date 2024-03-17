import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Exercise, Sets } from 'src/app/types/exercises';
import { DataService } from 'src/app/services/data.service';
import { IonRouterOutlet } from '@ionic/angular/standalone';
import { RecordSetComponent } from 'src/app/components/record-set/record-set.component';
import { register } from 'swiper/element/bundle';

import { IonicSlides } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';

register();
@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.page.html',
  styleUrls: ['./exercise-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExerciseDetailPage implements OnInit {

  public exercise: Exercise | null = null;
  public sets = [];
  public listDetail = this.dataService.selectedList$.getValue();
  public records$: Observable<{ date: string; set: Sets; }[]> = new Observable();
  public swiperModules = [IonicSlides];
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private routerOutlet: IonRouterOutlet,
    private modalCtrl: ModalController
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }
    this.exercise = this.dataService.getExercise(id);
    this.records$ = this.dataService.getReps({ exerciseId: id, listId: this.dataService.selectedList$.getValue()?.id ?? '0c9f8eb5-6b89-44ab-9f67-7c2a22b39b74' });
  }

  ngOnInit() {
  }
  async openRecordSet() {
    const modal = await this.modalCtrl.create({
      component: RecordSetComponent,
      componentProps: {
        exerciseId: this.exercise?.id,
        listId: this.listDetail?.id
      },
      breakpoints: [0, 1],
      initialBreakpoint: 1,
      cssClass: 'record-set-modal',
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.dataService.addReps({ exerciseId: this.exercise?.id as string, listId: this.listDetail?.id as string, reps: data.reps, weight: data.weight });
    }
  }

}
