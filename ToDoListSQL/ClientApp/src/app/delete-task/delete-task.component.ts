import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css'],
  providers: [TaskServiceService]
})
export class DeleteTaskComponent implements OnInit {
id : number = 0;
  constructor(private ts : TaskServiceService) { }

  ngOnInit(): void {
  }
  DeleteTask(){
    this.ts.deleteTask(this.id).subscribe (
      (result ) => {console.log(result)}
    );
  }
}
