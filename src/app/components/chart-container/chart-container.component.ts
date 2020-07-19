import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChartConfig} from '../../config/chart.config';
import {GeneratingService} from '../../services/generating/generating.service';
import {SliderConfig} from '../../config/slider.config';
import {BaseChartDirective} from 'ng2-charts';
import {UserSettingsInterface} from '../../interfaces/user-settings.interface';
import {SortingAlgorithmTypeEnum} from '../../enums/sorting-algorithm-type.enum';
import {SortingService} from '../../services/sorting/sorting.service';
import {SortingAlgorithmTypeInterface} from '../../interfaces/sorting-algorithm-type.interface';

@Component({
  selector: 'app-chart-container',
  templateUrl: './chart-container.component.html',
  styleUrls: ['./chart-container.component.scss']
})
export class ChartContainerComponent implements OnInit, AfterViewInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  chartConfig = ChartConfig;
  sliderConfig = SliderConfig;
  userSettings: UserSettingsInterface;
  areControlsDisabled: boolean;
  sortingAlgorithmTypeArray: SortingAlgorithmTypeInterface[];

  constructor(private generatingService: GeneratingService, private sortingService: SortingService) {
  }

  private static calculateChartContainerHeight() {
    const headerHeight = parseInt(window.getComputedStyle(document.querySelector('header')).height, 10);
    const footerHeight = parseInt(window.getComputedStyle(document.querySelector('footer')).height, 10);
    const containerMaxHeight = `${window.innerHeight - (headerHeight + footerHeight)}px`;

    const chartContainerElement: HTMLElement = document.querySelector('#chart-container');
    const chartElement: HTMLElement = document.querySelector('canvas');
    chartContainerElement.style.maxHeight = containerMaxHeight;
    chartContainerElement.style.minHeight = containerMaxHeight;
    chartElement.style.maxHeight = containerMaxHeight;
  }

  ngOnInit(): void {
    this.sortingAlgorithmTypeArray = this.mapSortingAlgorithmTypeEnumToArray();

    this.userSettings = {
      datasetSize: this.sliderConfig.datasetSize.stepsArray[0].value,
      sleepDuration: this.sliderConfig.sleepDuration.stepsArray[0].value,
      sortingAlgorithm: SortingAlgorithmTypeEnum[this.sortingAlgorithmTypeArray[0].key],
    };
  }

  ngAfterViewInit(): void {
    ChartContainerComponent.calculateChartContainerHeight();
  }

  onWindowResize() {
    ChartContainerComponent.calculateChartContainerHeight();
  }

  generateDataset() {
    this.toggleControls();
    this.generatingService.generateDataset(this.chart, this.userSettings).then(() => this.toggleControls());
  }

  sortDataset() {
    this.toggleControls();
    this.sortingService.sortDataset(this.chart, this.userSettings).then(() => this.toggleControls());
  }

  onAlgorithmSelection($event: Event) {
    console.log(this.userSettings);
    console.log(($event.target as HTMLSelectElement).value);
    console.log(SortingAlgorithmTypeEnum[($event.target as HTMLSelectElement).value]);
    this.userSettings.sortingAlgorithm = SortingAlgorithmTypeEnum[($event.target as HTMLSelectElement).value];
  }

  private toggleControls() {
    this.areControlsDisabled = !this.areControlsDisabled;
    this.sliderConfig.datasetSize = Object.assign({}, this.sliderConfig.datasetSize, {disabled: this.areControlsDisabled});
  }

  private mapSortingAlgorithmTypeEnumToArray() {
    return Object.keys(SortingAlgorithmTypeEnum).map(key => ({key, value: SortingAlgorithmTypeEnum[key]}));
  }
}
