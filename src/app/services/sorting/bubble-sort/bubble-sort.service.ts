import {Injectable} from '@angular/core';
import {SortingServiceInterface} from '../../../interfaces/sorting-service.interface';
import {BaseChartDirective} from 'ng2-charts';
import {UserSettingsInterface} from '../../../interfaces/user-settings.interface';

@Injectable({
  providedIn: 'root'
})
export class BubbleSortService implements SortingServiceInterface {

  constructor() {
  }

  sort(chart: BaseChartDirective, userSettings: UserSettingsInterface): Promise<void> {
    return bubbleSortAsync(chart, userSettings);
  }
}

async function bubbleSortAsync(chart: BaseChartDirective, userSettings: UserSettingsInterface) {
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

        await sleep(userSettings.sleepDuration);
        chart.update();
      }
    }
  } while (swapped);
}

function sleep(sleepDuration) {
  return new Promise(resolve => setTimeout(resolve, sleepDuration));
}
