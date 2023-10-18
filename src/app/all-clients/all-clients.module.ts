import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AllClientsRoutingModule } from './all-clients-routing.module';
import { AllClientsComponent } from './all-clients.component';
import { ClientComponent } from './client/client.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxEchartsModule } from 'ngx-echarts';
import { AllEmployeeComponent } from './employee/all-employee/all-employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { FormsModule as formModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';
import { ConfigureComponent } from './configure/configure.component';
import { VerifyComponent } from './verify-services/verify/verify.component';

@NgModule({
  declarations: [
    AllClientsComponent,
    ClientComponent,
    ClientDashboardComponent,
    AllEmployeeComponent,
    AddEmployeeComponent,
    ConfigureComponent,
    VerifyComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    AllClientsRoutingModule,
    formModule,
    NgxDatatableModule,
    ToastrModule.forRoot(),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
})
export class AllClientsModule {}
