import {Injectable} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import {UserSettingsInterface} from '../../interfaces/user-settings.interface';
import {SortingServiceInterface} from '../../interfaces/sorting-service.interface';
import {SortingAlgorithmTypeEnum} from '../../enums/sorting-algorithm-type.enum';
import {BubbleSortService} from './bubble-sort/bubble-sort.service';
import {QuickSortService} from './quick-sort/quick-sort.service';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  private sortingService: SortingServiceInterface;

  constructor() {
  }

  sortDataset(chart: BaseChartDirective, userSettings: UserSettingsInterface): Promise<void> {
    this.setUpSortingService(userSettings.sortingAlgorithm);
    return this.sortingService.sort(chart, userSettings);
  }

  setUpSortingService(algorithmType: SortingAlgorithmTypeEnum) {
    switch (algorithmType) {
      case (SortingAlgorithmTypeEnum.BUBBLE_SORT):
        this.sortingService = new BubbleSortService();
        break;
      case (SortingAlgorithmTypeEnum.QUICK_SORT):
        this.sortingService = new QuickSortService();
        break;
      default:
        this.sortingService = null;
        break;
    }
  }
}