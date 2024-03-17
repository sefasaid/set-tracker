import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { backspaceOutline } from 'ionicons/icons';
@Component({
  selector: 'app-num-keyboard',
  standalone: true,
  imports: [IonicModule, FormsModule],
  templateUrl: './num-keyboard.component.html',
  styleUrls: ['./num-keyboard.component.scss'],
})
export class NumKeyboardComponent implements OnInit {
  @Output() buttonPressed = new EventEmitter<number | 'backspace'>();
  constructor() {
    addIcons({ backspaceOutline });
  }

  ngOnInit() { }
  buttonClick(value: number) {
    this.buttonPressed.emit(value)
  }
  backspaceClick() {
    this.buttonPressed.emit('backspace')
  }
}
