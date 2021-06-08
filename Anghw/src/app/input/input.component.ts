import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  newTaskText: string = ''

  @Output() textEmitter = new EventEmitter<string>()

  addNewTask = () => {
    this.textEmitter.emit(this.newTaskText)
    this.newTaskText =  ''
  }
}

