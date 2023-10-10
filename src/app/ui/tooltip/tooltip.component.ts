import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.sass'],
})
export class TooltipComponent {
  name = 'World';
  toggleWithGreeting(tooltip: any, greeting: string) {
    if (tooltip.isOpen()) {
      tooltip.close();
    } else {
      tooltip.open({ greeting });
    }
  }
}
