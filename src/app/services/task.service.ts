import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Task } from 'src/app/Task';

import { Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiURL="http://localhost:5000/tasks"
  
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    // const tasks= of(TASKS); //it wraps TASKS and turns it into observable
    // return tasks;
     return this.http.get<Task[]>(this.apiURL)

  }
  deleteTasks(task:any):  Observable<Task>{
    return this.http.delete<Task>(this.apiURL+"/"+task.id)
  }

  updateTaskReminder(task:any): Observable<Task>{
    return this.http.put<Task>(this.apiURL+"/"+task.id,task,this.httpOptions)
  }
  postTask(task:Task): Observable<Task>{
    return this.http.post<Task>(this.apiURL,task,this.httpOptions);

  }


}
