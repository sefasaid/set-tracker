import { IonRouterOutlet } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addCircleOutline, documentTextOutline, trash } from 'ionicons/icons';
import { RouterLinkWithHref } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { v4 as uuidv4 } from 'uuid';
import { DataService } from 'src/app/services/data.service';
import { AddListComponent } from 'src/app/components/add-list/add-list.component';
import packageJson from '../../../../package.json';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkWithHref]
})
export class ListPage implements OnInit {
  date = new Date();
  presentingElement = this.ionRouterOutlet.nativeEl;
  public list$ = this.dataService.exercisesList$;
  public summary$ = this.dataService.getSummary();
  public appVersion = packageJson.version;
  constructor(
    private modalCtrl: ModalController,
    private readonly ionRouterOutlet: IonRouterOutlet,
    private dataService: DataService,
  ) {
    addIcons({ addCircleOutline, documentTextOutline, trash });
  }

  ngOnInit() {
  }
  async openAddExercise() {
    const modal = await this.modalCtrl.create({
      component: AddListComponent,
      presentingElement: this.presentingElement
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.dataService.addToExercisesList({ id: uuidv4(), name: data.name, description: data.description })
    }
  }

}
