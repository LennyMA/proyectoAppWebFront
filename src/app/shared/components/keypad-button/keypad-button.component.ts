import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KeypadButton } from '../../interfaces/keypad.interfaces';

@Component({
  selector: 'cem-keypad-button',
  templateUrl: './keypad-button.component.html',
  styleUrls: ['./keypad-button.component.css']
})
export class KeypadButtonComponent implements OnInit {
  @Input() keypadButtons: KeypadButton[] =[]
  @Output() onClick: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  doAction(action: string): void{
    this.onClick.emit(action)
  }

}
