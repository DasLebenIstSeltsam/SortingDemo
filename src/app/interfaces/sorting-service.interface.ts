import {BaseChartDirective} from 'ng2-charts';
import {UserSettingsInterface} from './user-settings.interface';

export interface SortingServiceInterface {
  sort(chart: BaseChartDirective, userSettings: UserSettingsInterface): Promise<void>;
}
