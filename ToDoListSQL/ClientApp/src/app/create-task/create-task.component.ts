import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  providers: [TaskServiceService]
})
export class CreateTaskComponent implements OnInit {
  newTask: Task;
  constructor(private ts : TaskServiceService) { 
    this.newTask = new Task (0,"", false);
  }

  ngOnInit(): void {
  }
  CreateTask() {
  this.ts.createTask(this.newTask).subscribe (
    (result) => {console.log("This works")}
  )
  }
}
