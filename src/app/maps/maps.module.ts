import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

import { MapsRoutingModule } from './maps-routing.module';
import { GoogleComponent } from './google/google.component';

@NgModule({
  declarations: [GoogleComponent],
  imports: [CommonModule, MapsRoutingModule, GoogleMapsModule],
})
export class MapsModule {}
