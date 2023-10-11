import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AllClientsRoutingModule } from './all-clients-routing.module';
import { AllClientsComponent } from './all-clients.component';
import { ClientComponent } from './client/client.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AllClientsComponent,
    ClientComponent,
    ClientDashboardComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgApexchartsModule,
    AllClientsRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
})
export class AllClientsModule {}
