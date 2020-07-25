import {BaseChartDirective} from 'ng2-charts';
import {UserSettingsInterface} from '../interfaces/user-settings.interface';

export abstract class SortService {
  abstract sort(chart: BaseChartDirective, userSettings: UserSettingsInterface): Promise<void>;

  sleep(sleepDuration) {
    return new Promise(resolve => setTimeout(resolve, sleepDuration));
  }
}
