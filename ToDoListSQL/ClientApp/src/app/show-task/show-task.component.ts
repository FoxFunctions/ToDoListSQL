import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Task } from '../Task';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css'],
  providers: [TaskServiceService]
})
export class ShowTaskComponent implements OnInit {
  results: Task[] = [];
  constructor(private ts: TaskServiceService) { }

  ngOnInit(): void {
  }
  showAllTasks(): void{
    this.ts.showAllTasks().subscribe(
      (response) => {
        this.results = response;
      }
    );
  }
}
