import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Task } from '../utils/types';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  url = 'http://localhost:3004/tasks'

  taskArray: Task[] = []

  constructor(public firstService: MainService) { }



  ngOnInit() {
    this.firstService.getTasks(this.url).subscribe(response => this.taskArray = response)
  }


  generate(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }



  addNewTaskAppHandler = (newText: string) => {

    this.taskArray.push({ id: this.generate(), text: newText, isComplited: false, addDate: new Date() })
    this.firstService.postTask(this.url, {
      id: this.generate(),
      text: newText,
      isComplited: false,
      addDate: new Date()

    }).subscribe(response => console.log(response))


  }

  deleteTaskAppHandler = (id: string) => {

    this.firstService.deleteTaskById(this.url, id).subscribe(response => console.log(response))
    this.taskArray = this.taskArray.filter((task) => {
      return task.id !== id
    })
  }



  changeTaskHandler = (id: string) => {
    console.log(this.taskArray)
    this.taskArray = this.taskArray.map((item) => {

      if (item.id == id) {
        this.firstService.updateTask(this.url, id, !item.isComplited).subscribe(response=>console.log(response))
        return {
          ...item,
          isComplited: !item.isComplited

        }
      }
      else {
        return item
      }

    })
 
  }
}
