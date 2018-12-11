import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/Models/task-model';
import { TaskService } from 'src/app/task.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  Tasks: any;
  nameSearch: string;
  parentTaskSearch: string;
  priorityFromSearch: Number;
  priorityToSearch: Number;
  startDateSearch: string;
  endDateSearch: string;

  constructor(private service: TaskService) { }

  ngOnInit() {

    this.service.GetAllTasks()
                  .subscribe(data => {
                    this.Tasks = data;
                    // tslint:disable-next-line:no-unused-expression
                    console.log(this.Tasks) , err => console.log(err);
                  });
   // tslint:disable-next-line:semicolon
   };

   EndTask(taskId: Number)
   // tslint:disable-next-line:one-line
   {
     this.service.EndTask(taskId);
   }

   DisableButton(endTask: string) {
     if (endTask === 'Y') {
       return true;
     }
     return false;
   }

}
