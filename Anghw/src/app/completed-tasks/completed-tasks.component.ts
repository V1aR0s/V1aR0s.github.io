import { Component, OnInit, Input, Output} from '@angular/core';
import { MainService } from '../main.service';
import { Task } from '../utils/types';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {

  @Input() oneTask: Task = {id:'', text:'',isComplited:false}
  
  url = 'http://localhost:3004/tasks'

  taskArray: Task[] = []

  constructor (public firstService:MainService){}

  ngOnInit(){
    this.firstService.getTasks(this.url).subscribe(response=>this.taskArray=response.filter((item)=>{
      return item.isComplited
    }))
  }

  showArray = () => {
    console.log(this.taskArray)

  }

  showTasks = (id:string)=>{
    console.log(id)
  }

}
