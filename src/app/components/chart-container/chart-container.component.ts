import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChartConfig} from '../../config/chart.config';
import {GeneratingService} from '../../services/generating/generating.service';
import {SliderConfig} from '../../config/slider.config';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-chart-container',
  templateUrl: './chart-container.component.html',
  styleUrls: ['./chart-container.component.scss']
})
export class ChartContainerComponent implements OnInit, AfterViewInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  chartConfig = ChartConfig;
  sliderConfig = SliderConfig;
  datasetSize: number;
  sleepDuration: number;

  constructor(private generatingService: GeneratingService) {
  }

  ngOnInit(): void {
    this.datasetSize = this.sliderConfig.datasetSize.stepsArray[0].value;
    this.sleepDuration = this.sliderConfig.sleepDuration.stepsArray[0].value;
  }

  ngAfterViewInit(): void {
    this.calculateChartContainerHeight();
  }

  onWindowResize() {
    this.calculateChartContainerHeight();
  }

  calculateChartContainerHeight() {
    const headerHeight = parseInt(window.getComputedStyle(document.querySelector('header')).height, 10);
    const footerHeight = parseInt(window.getComputedStyle(document.querySelector('footer')).height, 10);
    const containerMaxHeight = `${window.innerHeight - (headerHeight + footerHeight)}px`;

    const chartContainerElement: HTMLElement = document.querySelector('#chart-container');
    const chartElement: HTMLElement = document.querySelector('canvas');
    chartContainerElement.style.maxHeight = containerMaxHeight;
    chartContainerElement.style.minHeight = containerMaxHeight;
    chartElement.style.maxHeight = containerMaxHeight;
  }

  generateDataset() {
    this.generatingService.generateDataset(this.chart, this.datasetSize, this.sleepDuration);
  }
}
