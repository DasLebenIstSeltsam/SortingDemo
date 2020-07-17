import {Options} from 'ng5-slider';

export class SliderConfig {
  public static datasetSize: Options = {
    disabled: false,
    showTicksValues: true,
    stepsArray: [
      {value: 50},
      {value: 100},
      {value: 250},
      {value: 500},
      {value: 1000},
    ]
  };

  public static sleepDuration: Options = {
    disabled: false,
    showTicksValues: true,
    stepsArray: [
      {value: 0},
      {value: 50},
      {value: 100},
      {value: 250},
      {value: 500},
    ]
  };
}
