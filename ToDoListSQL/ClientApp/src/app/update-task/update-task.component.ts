import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Task } from '../Task';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
  providers: [ TaskServiceService]
})
export class UpdateTaskComponent implements OnInit {
updatedTask : Task;
id : number = 0;
  constructor(private ts : TaskServiceService) {
    this.updatedTask = new Task (0,"", true);
   }

  ngOnInit(): void {
  }
UpdateTask(){
  this.ts.updateTask(this.id, this.updatedTask).subscribe(
    (results) => {console.log(results)}
  )
}
}
