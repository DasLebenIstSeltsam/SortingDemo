import {Injectable} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';

@Injectable({
  providedIn: 'root'
})
export class GeneratingService {

  constructor() {
  }

  generateDataset(chart: BaseChartDirective, datasetSize: number, sleepDuration: number) {
    generateDatasetFunctionAsync(chart, datasetSize, sleepDuration).then();
  }
}

async function generateDatasetFunctionAsync(chart: BaseChartDirective, datasetSize: number, sleepDuration: number) {
  const chartData = chart.chart.config.data;
  chartData.labels = [];
  chartData.datasets[0].data = [];

  for (let i = 1; i <= datasetSize; i++) {
    chartData.labels.push('');
    chartData.datasets[0].data.push(Math.random());

    await sleep(sleepDuration);

    chart.update();
  }
}

function sleep(sleepDuration) {
  return new Promise(resolve => setTimeout(resolve, sleepDuration));
}
