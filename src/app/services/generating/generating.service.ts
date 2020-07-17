import {Injectable} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import {UserSettings} from '../../interfaces/user-settings';

@Injectable({
  providedIn: 'root'
})
export class GeneratingService {

  constructor() {
  }

  generateDataset(chart: BaseChartDirective, userSettings: UserSettings): Promise<void> {
    return generateDatasetFunctionAsync(chart, userSettings);
  }
}

async function generateDatasetFunctionAsync(chart: BaseChartDirective, userSettings: UserSettings) {
  const chartData = chart.chart.config.data;
  chartData.labels = [];
  chartData.datasets[0].data = [];

  for (let i = 1; i <= userSettings.datasetSize; i++) {
    chartData.labels.push('');
    chartData.datasets[0].data.push(Math.random());

    await sleep(userSettings.sleepDuration);

    chart.update();
  }
}

function sleep(sleepDuration) {
  return new Promise(resolve => setTimeout(resolve, sleepDuration));
}
