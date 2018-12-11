import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/Models/task-model';
import { FormsModule } from '@angular/forms';
import { TaskService } from 'src/app/task.service';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  TaskItem: TaskModel;
  Tasks: any;
  constructor(private service: TaskService) { }

  ngOnInit() {
    this.TaskItem = new TaskModel();
    this.service.GetAllTasks()
                  .subscribe(data => {
                    // tslint:disable-next-line:no-unused-expression
                    this.Tasks = data, err => console.log(err);
                  });
  }

  AddTask() {
    this.service.AddTask(this.TaskItem);
  }

  Reset() {
    this.TaskItem = new TaskModel();
  // tslint:disable-next-line:no-trailing-whitespace
  }  
}
