import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TaskModel } from 'src/Models/task-model';
import { RequestMethod } from '@angular/http/src/enums';
import { RequestOptions } from '@angular/http';
import { RequestOptionsArgs } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  GetAllTasks() {
    return this.http.get('http://localhost/TaskManager/Task/GetAllTasks');
  }

  AddTask(task:  TaskModel) {
      // let body = JSON.stringify(task);
       // tslint:disable-next-line:prefer-const
       let httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
      // tslint:disable-next-line:max-line-length
      this.http.post('http://localhost/TaskManager/Task/AddTask', task, httpOptions).subscribe(response => console.log(response), err => console.log(err)) ;
  }

  UpdateTask(task: TaskModel) {
      // var body = JSON.stringify(task);
      const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
      // tslint:disable-next-line:max-line-length
      this.http.put('http://localhost/TaskManager/Task/UpdateTaks', task, httpOptions).subscribe(response => console.log(response), err => console.log(err)) ;
  }

  GetTaskById(taskId: Number) {
    return this.http.get('http://localhost/TaskManager/Task/GetTaskById?taskId=' + taskId);
  }

  EndTask(taskId: Number)  {
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    // tslint:disable-next-line:max-line-length
    return this.http.delete('http://localhost/TaskManager/Task/DeleteTaskById?taskId=' + taskId, httpOptions).subscribe(response => console.log(response),err => console.log(err));
  }
}

