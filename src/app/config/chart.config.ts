import * as chartJs from 'chart.js';
import {Label} from 'ng2-charts/lib/base-chart.directive';

export class ChartConfig {
  private static chartColor = 'rgb(0,123,255, 0.75)';

  public static chartType: chartJs.ChartType = 'bar';
  public static chartLabels: Label[] = [];
  public static chartData: chartJs.ChartDataSets[] = [{
    backgroundColor: ChartConfig.chartColor,
    borderColor: ChartConfig.chartColor,
    borderWidth: 1,
    hoverBackgroundColor: ChartConfig.chartColor,
    hoverBorderColor: ChartConfig.chartColor,
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
