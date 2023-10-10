import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AllClientsRoutingModule } from './all-clients-routing.module';
import { AllClientsComponent } from './all-clients.component';

@NgModule({
  declarations: [AllClientsComponent],
  imports: [CommonModule, NgbModule, AllClientsRoutingModule],
})
export class AllClientsModule {}
