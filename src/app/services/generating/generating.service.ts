import {Injectable} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import {UserSettingsInterface} from '../../interfaces/user-settings.interface';

@Injectable({
  providedIn: 'root'
})
export class GeneratingService {

  constructor() {
  }

  async generateDataset(chart: BaseChartDirective, userSettings: UserSettingsInterface): Promise<void> {
    const chartData = chart.chart.config.data;
    chartData.labels = [];
    chartData.datasets[0].data = [];

    for (let i = 1; i <= userSettings.datasetSize; i++) {
      chartData.labels.push('');
      chartData.datasets[0].data.push(Math.random());
    }
    chart.update();
  }
}
