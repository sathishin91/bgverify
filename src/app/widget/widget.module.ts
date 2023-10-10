import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { WidgetRoutingModule } from './widget-routing.module';
import { ChartWidgetComponent } from './chart-widget/chart-widget.component';
import { DataWidgetComponent } from './data-widget/data-widget.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ChartWidgetComponent, DataWidgetComponent],
  imports: [
    CommonModule,
    NgbModule,
    WidgetRoutingModule,
    NgScrollbarModule,
    NgApexchartsModule,
    NgChartsModule,
    NgbProgressbarModule,
  ],
})
export class WidgetModule {}
