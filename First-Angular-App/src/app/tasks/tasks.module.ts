import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/card/shared.module';


@NgModule({
  declarations: [TaskComponent, TasksComponent, NewTaskComponent],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, SharedModule]
})
export class TasksModule {}
