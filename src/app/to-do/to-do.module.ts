import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do.component';

import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailTodoComponent } from './detail-todo/detail-todo.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { ClientDetailTodoComponent } from './client-detail-todo/client-detail-todo.component';

@NgModule({
  declarations: [ToDoComponent, DetailTodoComponent, ClientDetailTodoComponent],
  imports: [
    CommonModule,
    NgApexchartsModule,
    ToDoRoutingModule,
    NgbProgressbarModule,
    NgbModule,
    NgScrollbarModule,
    NgxGaugeModule,
  ],
})
export class ToDoModule {}
