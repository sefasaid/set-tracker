import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular/standalone';
import { NumKeyboardComponent } from '../num-keyboard/num-keyboard.component';
import { imports } from 'src/app/imports';

@Component({
  selector: 'app-record-set',
  standalone: true,
  imports: [imports, FormsModule, NumKeyboardComponent],
  templateUrl: './record-set.component.html',
  styleUrls: ['./record-set.component.scss'],
})
export class RecordSetComponent implements OnInit {

  selectedInput: number = 0
  repetitions = 10
  weight = 5
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() { }

  buttonClick(input: number | 'backspace', selectedInput?: boolean) {
    this.selectedInput = selectedInput ? 1 : 0;
    this.keyClicked(input);
  }
  keyClicked(input: number | 'backspace') {
    if (typeof input === 'number') {
      if (this.selectedInput === 0) {
        this.repetitions = this.repetitions + input;
        if (this.repetitions < 0) {
          this.repetitions = 0
        }
      } else {
        this.weight = this.weight + input
        if (this.weight < 0) {
          this.weight = 0
        }
      }
    } else {
      if (this.selectedInput === 0) {
        this.repetitions = Math.floor(this.repetitions / 10)
      } else {
        this.weight = Math.floor(this.weight / 10)
      }
    }
  }
  addSet() {
    if (this.repetitions > 0 && this.weight > 0) {
      this.modalCtrl.dismiss({ reps: this.repetitions, weight: this.weight }, 'confirm');
    }
  }
}
