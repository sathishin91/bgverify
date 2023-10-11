import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss'],
})
export class ClientDashboardComponent {
  // graph line chart
  graph_line_chart: EChartsOption = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['sales', 'purchases'],
      textStyle: {
        color: '#9aa0ac',
      },
    },
    toolbox: {
      show: !1,
    },
    xAxis: [
      {
        type: 'category',
        data: ['2000', '2001', '2002', '2003', '2004', '2005'],
        axisLabel: {
          fontSize: 10,
          color: '#9aa0ac',
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          fontSize: 10,
          color: '#9aa0ac',
        },
      },
    ],
    series: [
      {
        name: 'sales',
        type: 'bar',
        data: [22, 54, 37, 23, 25.6, 76],
        markPoint: {
          data: [
            {
              type: 'max',
              name: '???',
            },
            {
              type: 'min',
              name: '???',
            },
          ],
        },
        markLine: {
          data: [
            {
              type: 'average',
            },
          ],
        },
      },

      {
        name: 'purchases',
        type: 'bar',
        data: [35, 45, 47, 10, 35, 70],
        markLine: {
          data: [
            {
              type: 'average',
            },
          ],
        },
      },
    ],
    color: ['#9f78ff', '#32cafe'],
  };
}
