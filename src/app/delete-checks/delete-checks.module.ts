import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteChecksRoutingModule } from './delete-checks-routing.module';
import { DeleteChecksComponent } from './delete-checks.component';


@NgModule({
  declarations: [
    DeleteChecksComponent
  ],
  imports: [
    CommonModule,
    DeleteChecksRoutingModule
  ]
})
export class DeleteChecksModule { }
