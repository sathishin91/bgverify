import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './to-do.component';
import { DetailTodoComponent } from './detail-todo/detail-todo.component';
import { ViewClientTodoComponent } from './view-client-todo/view-client-todo.component';

const routes: Routes = [
  { path: '', component: ToDoComponent },
  { path: 'todo-detail', component: DetailTodoComponent },
  { path: 'todo-detail/view', component: ViewClientTodoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoRoutingModule {}
