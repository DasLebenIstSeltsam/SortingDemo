import {Injectable} from '@angular/core';
import {SortService} from '../../../abstract-classes/sort.service';
import {BaseChartDirective} from 'ng2-charts';
import {UserSettingsInterface} from '../../../interfaces/user-settings.interface';

@Injectable({
  providedIn: 'root'
})
export class SelectionSortService extends SortService {

  constructor() {
    super();
  }

  async sort(chart: BaseChartDirective, userSettings: UserSettingsInterface): Promise<void> {
    const dataset = chart.datasets[0].data;
    const datasetSize = dataset.length;

    for (let i = 0; i < datasetSize; i++) {
      let min = i;
      for (let j = i + 1; j < datasetSize; j++) {
        if (dataset[min] > dataset[j]) {
          min = j;
        }
      }
      if (min !== i) {
        const tmp = dataset[i];
        dataset[i] = dataset[min];
        dataset[min] = tmp;

        await this.sleep(userSettings.sleepDuration);
        chart.update();
      }
    }
  }
}
