
import { List } from '../../types/exercises';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';
import { AddExerciseComponent } from 'src/app/components/add-exercise/add-exercise.component';
import { addIcons } from 'ionicons';
import { addOutline, trash } from 'ionicons/icons';
import { RecordSetComponent } from 'src/app/components/record-set/record-set.component';
import { imports } from 'src/app/imports';
import { IonRouterOutlet, ModalController, ActionSheetController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.page.html',
  styleUrls: ['./list-detail.page.scss'],
  standalone: true,
  imports: [imports, CommonModule, FormsModule, RouterLinkWithHref],
  providers: [
    ModalController, ActionSheetController, IonRouterOutlet
  ]
})
export class ListDetailPage implements OnInit, OnDestroy {
  public exerciseList: List | null = null;
  presentingElement = this.ionRouterOutlet.nativeEl;
  private modalOrActionOpen: boolean = false;

  constructor(
    public dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private readonly ionRouterOutlet: IonRouterOutlet,
  ) {
    addIcons({ addOutline, trash });

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigateByUrl('/');
      return;
    }
    this.exerciseList = this.dataService.getExerciseList(id);
    this.dataService.selectedList$.next(this.exerciseList);
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.dataService.selectedList$.next(null);
  }
  async openAddExercise() {
    const modal = await this.modalCtrl.create({
      component: AddExerciseComponent,
      presentingElement: this.presentingElement,
    });
    modal.present();
  }

  async openRecordSet(id: string) {
    const modal = await this.modalCtrl.create({
      component: RecordSetComponent,
      componentProps: {
        exerciseId: id,
        listId: this.exerciseList?.id
      },
      breakpoints: [0, 1],
      initialBreakpoint: 1,
      cssClass: 'record-set-modal',
    });
    modal.present();
    this.modalOrActionOpen = true;
    const { data, role } = await modal.onWillDismiss().finally(() => {
      this.modalOrActionOpen = false;
    })
    if (role === 'confirm') {
      this.dataService.addReps({ exerciseId: id, listId: this.exerciseList?.id as string, reps: data.reps, weight: data.weight });
    }
  }
  async presentActionSheet(id: string) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          handler: () => {
            this.dataService.deleteExerciseFromList(id, this.exerciseList?.id as string);
            this.modalOrActionOpen = false;
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.modalOrActionOpen = false;
          },
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
    this.modalOrActionOpen = true;
  }
  onDrag(event: any, id: string, item: any) {
    let ratio = event.detail.ratio;
    if (this.modalOrActionOpen) return;
    if (ratio < -2) {
      this.openRecordSet(id);
      item.close();
    }
    if (ratio > 2) {
      this.presentActionSheet(id);
      item.close();
    }
  }

}
