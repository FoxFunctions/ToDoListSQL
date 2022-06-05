import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './Task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  urlRoot: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.urlRoot = baseUrl;

   }

   showAllTasks(){
     return this.http.get<Task[]>(this.urlRoot + "todolist/ShowAllTasks/");
   }

    createTask(t : Task){
     return this.http.put<string>(this.urlRoot + "todolist/CreateTask/" , t);
   }

   deleteTask(id : number){
     return this.http.delete<string>(this.urlRoot + "todolist/DeleteTask/" + id);
   }

   updateTask(id : number, body : Task){
     return this.http.post<string>(this.urlRoot + "todolist/UpdateTask/" + id, body);
   }
}
