import { Component, inject, Input } from '@angular/core';
import { ITask } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.css',
  standalone: false,
})
export class Task {
  @Input({ required: true }) task!: ITask;

  // constructor(private tasksService: TasksService) {}
  private tasksService = inject(TasksService);

  onTaskComplete() {
    this.tasksService.removeTask(this.task.id);
  }
}
