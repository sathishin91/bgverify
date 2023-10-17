import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './to-do.component';
import { DetailTodoComponent } from './detail-todo/detail-todo.component';

const routes: Routes = [
  { path: '', component: ToDoComponent },
  { path: 'todo-detail', component: DetailTodoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoRoutingModule {}
