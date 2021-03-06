import {Injectable} from '@angular/core';
import {SortService} from '../../../abstract-classes/sort.service';
import {BaseChartDirective} from 'ng2-charts';
import {UserSettingsInterface} from '../../../interfaces/user-settings.interface';

@Injectable({
  providedIn: 'root'
})
export class QuickSortService extends SortService {

  constructor() {
    super();
  }

  // tslint:disable-next-line:max-line-length
  private async partition(chart: BaseChartDirective, userSettings: UserSettingsInterface, dataset: number[], leftIndex: number, rightIndex: number) {
    const pivot = dataset[Math.floor((rightIndex + leftIndex) / 2)];
    let i = leftIndex;
    let j = rightIndex;

    while (i <= j) {
      while (dataset[i] < pivot) {
        i++;
      }
      while (dataset[j] > pivot) {
        j--;
      }
      if (i <= j) {
        const temp = dataset[i];
        dataset[i] = dataset[j];
        dataset[j] = temp;
        i++;
        j--;

        await this.sleep(userSettings.sleepDuration);
        chart.update();
      }
    }

    return i;
  }

  async sort(chart: BaseChartDirective, userSettings: UserSettingsInterface): Promise<void> {
    const dataset = chart.datasets[0].data as number[];
    await this.quickSort(chart, userSettings, dataset, 0, dataset.length - 1);
  }

  // tslint:disable-next-line:max-line-length
  private async quickSort(chart: BaseChartDirective, userSettings: UserSettingsInterface, dataset: number[], leftIndex: number, rightIndex: number) {
    let index;

    if (dataset.length - 1 > 1) {
      index = await this.partition(chart, userSettings, dataset, leftIndex, rightIndex);

      if (leftIndex < index - 1) {
        await this.quickSort(chart, userSettings, dataset, leftIndex, index - 1);
      }
      if (index < rightIndex) {
        await this.quickSort(chart, userSettings, dataset, index, rightIndex);
      }
    }
  }
}
