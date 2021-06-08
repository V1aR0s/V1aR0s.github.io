import { Host, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ToDoComponent } from '../to-do/to-do.component';
import { CompletedTasksComponent } from '../completed-tasks/completed-tasks.component';

const toDoRoute: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'todoapp', component:ToDoComponent
  },
  {
    path:'completed-tasks',
    component:CompletedTasksComponent

  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(toDoRoute)
  ],
  exports: [RouterModule]
})
export class RoutingModuleModule { }
