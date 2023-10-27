import { Component } from '@angular/core';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
})
export class VerifyComponent {
  mappingService = false;
  tatMappingServices = false;
  betterPlaceSpocServices = false;
  openMappingServices() {
    this.mappingService = true;
  }

  openTatMappingServices() {
    this.tatMappingServices = true;
    this.mappingService = false;
  }

  openBetterPlaceSpocServices() {
    this.betterPlaceSpocServices = true;
    this.tatMappingServices = false;
  }
}
