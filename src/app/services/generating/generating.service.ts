import {Injectable} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import {UserSettingsInterface} from '../../interfaces/user-settings.interface';

@Injectable({
  providedIn: 'root'
})
export class GeneratingService {
  private generatedDataset: number[];

  constructor() {
  }

  async generateDataset(chart: BaseChartDirective, userSettings: UserSettingsInterface): Promise<void> {
    const chartData = chart.chart.config.data;
    chartData.labels = [];
    chartData.datasets[0].data = [];
    this.generatedDataset = [];

    for (let i = 0; i < userSettings.datasetSize; i++) {
      const randomNumber = Math.random();
      this.generatedDataset.push(randomNumber);

      chartData.labels.push('');
      chartData.datasets[0].data.push(randomNumber);
    }

    chart.update();
  }

  async regenerateDataset(chart: BaseChartDirective, userSettings: UserSettingsInterface): Promise<void> {
    const chartData = chart.chart.config.data;
    chartData.labels = [];
    chartData.datasets[0].data = [];

    for (let i = 0; i < userSettings.datasetSize; i++) {
      const randomNumber = this.generatedDataset[i];

      chartData.labels.push('');
      chartData.datasets[0].data.push(randomNumber);
    }

    chart.update();
  }
}
