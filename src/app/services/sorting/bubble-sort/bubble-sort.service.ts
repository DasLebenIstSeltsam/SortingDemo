import {Injectable} from '@angular/core';
import {SortService} from '../../../abstract-classes/sort.service';
import {BaseChartDirective} from 'ng2-charts';
import {UserSettingsInterface} from '../../../interfaces/user-settings.interface';

@Injectable({
  providedIn: 'root'
})
export class BubbleSortService extends SortService {

  constructor() {
    super();
  }

  async sort(chart: BaseChartDirective, userSettings: UserSettingsInterface): Promise<void> {
    const dataset = chart.datasets[0].data;
    let swapped;

    do {
      swapped = false;
      for (let i = 0; i < dataset.length; i++) {
        if (dataset[i] > dataset[i + 1]) {
          const tmp = dataset[i];
          dataset[i] = dataset[i + 1];
          dataset[i + 1] = tmp;
          swapped = true;

          await this.sleep(userSettings.sleepDuration);
          chart.update();
        }
      }
    } while (swapped);
  }
}
