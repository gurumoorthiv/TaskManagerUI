import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/Models/task-model';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute , Params, Router} from '@angular/router/';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  TaskItem: any;
  Tasks: any;
  TaskId: any;

  constructor(private service: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.service.GetAllTasks()
                  .subscribe(data => {
                    // tslint:disable-next-line:no-unused-expression
                    this.Tasks = data, err => console.log(err);
                  });

    this.route.params.subscribe((params: Params) => {
      this.TaskId = params['id'];
    });

    

    
    this.service.GetTaskById(this.TaskId)
    .subscribe(data => this.TaskItem = data , err => console.log(err));
  }

  UpdateTask() {
    this.service.UpdateTask(this.TaskItem);
  }

  Reset() {
    this.TaskItem.taskName = '';
    this.TaskItem.priority = 0;
    this.TaskItem.parentTaskModel =new TaskModel();
    this.TaskItem.startDate = '';
    this.TaskItem.endDate = '';
  }
}
