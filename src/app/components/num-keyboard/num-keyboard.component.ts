import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { backspaceOutline } from 'ionicons/icons';
import { imports } from 'src/app/imports';
@Component({
  selector: 'app-num-keyboard',
  standalone: true,
  imports: [imports, FormsModule],
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
