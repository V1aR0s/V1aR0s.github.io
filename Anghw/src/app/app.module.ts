import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { TaskComponent } from './task/task.component';
import { ToDoComponent } from './to-do/to-do.component';
import { HomeComponent } from './home/home.component';
import { RoutingModuleModule } from './routing-module/routing-module.module';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { DolarDirective } from './dolar.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TaskComponent,
    ToDoComponent,
    HomeComponent,
    CompletedTasksComponent,
    DolarDirective
  ],
  imports: [
    BrowserModule,
    RoutingModuleModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
