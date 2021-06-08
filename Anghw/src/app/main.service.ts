import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './utils/types';

@Injectable({
  providedIn: 'root'
})
export class MainService {

 
  
  constructor (public http: HttpClient){}

  getTasks(url:string): Observable<Task[]> {
    return this.http.get<Task[]>(url)

  }
  

 postTask(url:string, newTask:Task){
  return this.http.post(url,newTask)

 }
 
 deleteTaskById(url:string, id:string){
   return this.http.delete(url +'/'+ id)
 }

 updateTask(url:string, id:string, isComplited:boolean){
   return this.http.patch(url +'/'+ id, {isComplited:isComplited})
 }
 
}
