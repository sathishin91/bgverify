import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteChecksRoutingModule } from './delete-checks-routing.module';
import { DeleteChecksComponent } from './delete-checks.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  declarations: [DeleteChecksComponent],
  imports: [
    NgbModule,
    NgScrollbarModule,
    CommonModule,
    DeleteChecksRoutingModule,
  ],
})
export class DeleteChecksModule {}
