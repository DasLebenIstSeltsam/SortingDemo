import * as chartJs from 'chart.js';
import {Label} from 'ng2-charts/lib/base-chart.directive';

export class ChartConfig {
  public static barChartType: chartJs.ChartType = 'bar';
  public static barChartLabels: Label[] = [];
  public static barChartData: chartJs.ChartDataSets[] = [{
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: []
  }];

  public static barChartOptions: chartJs.ChartOptions = {
    aspectRatio: 4,
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      duration: 100,
      easing: 'linear'
    },
    tooltips: {
      enabled: false
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
}
