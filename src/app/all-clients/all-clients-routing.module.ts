import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllClientsComponent } from './all-clients.component';
import { ClientComponent } from './client/client.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { AllEmployeeComponent } from './employee/all-employee/all-employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { ConfigureComponent } from './configure/configure.component';

const routes: Routes = [
  { path: '', component: AllClientsComponent },
  { path: 'client', component: ClientComponent },
  { path: 'all-clients/client', component: ClientComponent },
  { path: 'client/client-dashboard', component: ClientDashboardComponent },
  { path: 'client/all-employee', component: AllEmployeeComponent },
  { path: 'client/add-employee', component: AddEmployeeComponent },
  { path: 'client/configure', component: ConfigureComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllClientsRoutingModule {}
