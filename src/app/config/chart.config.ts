import * as chartJs from 'chart.js';
import {Label} from 'ng2-charts/lib/base-chart.directive';

export class ChartConfig {
  public static chartType: chartJs.ChartType = 'bar';
  public static chartLabels: Label[] = [];
  public static chartData: chartJs.ChartDataSets[] = [{
    backgroundColor: 'rgb(40,167,69)',
    borderColor: 'rgb(13,185,240)',
    borderWidth: 0,
    hoverBackgroundColor: 'rgb(13,185,240)',
    hoverBorderColor: 'rgb(13,185,240)',
    hoverBorderWidth: 0,
    data: []
  }];
  public static chartOptions: chartJs.ChartOptions = {
    responsive: true,
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
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        display: false,
        gridLines: {
          display: false
        },
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
}
