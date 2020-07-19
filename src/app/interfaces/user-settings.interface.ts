import {SortingAlgorithmTypeEnum} from '../enums/sorting-algorithm-type.enum';

export interface UserSettingsInterface {
  datasetSize: number;
  sleepDuration: number;
  sortingAlgorithm: SortingAlgorithmTypeEnum;
}
