import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllClientsComponent } from './all-clients.component';
import { ClientComponent } from './client/client.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';

const routes: Routes = [
  { path: '', component: AllClientsComponent },
  { path: 'client', component: ClientComponent },
  { path: 'client/client-dashboard', component: ClientDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllClientsRoutingModule {}
