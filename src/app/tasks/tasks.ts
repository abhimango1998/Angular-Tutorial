import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { TaskForm } from './task-form/task-form';
import { ITaskFormData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, TaskForm],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  isAdding = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  startAddingTask() {
    this.isAdding = true;
  }

  onCloseAddTask() {
    this.isAdding = false;
  }
}
