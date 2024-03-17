import { ModalController } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { imports } from 'src/app/imports';

@Component({
  selector: 'app-add-list',
  standalone: true,
  imports: [imports, FormsModule],
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss'],
})
export class AddListComponent implements OnInit {

  public name: string = '';
  public description: string = '';
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() { }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss({ name: this.name, description: this.description }, 'confirm');
  }
}
