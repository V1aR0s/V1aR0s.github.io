import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../utils/types';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  @Input() oneTask: Task = {id:'', text:'',isComplited:false}

  @Output() idEmitter = new EventEmitter<string>()
  @Output() isEmitterForChange = new EventEmitter<string>()
  
  deleteTask(){
      this.idEmitter.emit(this.oneTask.id)
  }
  
  changeHandler(){
     this.isEmitterForChange.emit(this.oneTask.id)
  }
 
  ngOnInit(){
    console.log(this.oneTask)
  }
  
}
