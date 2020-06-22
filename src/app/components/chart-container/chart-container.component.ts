import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ChartConfig} from '../../config/chart.config';

@Component({
  selector: 'app-chart-container',
  templateUrl: './chart-container.component.html',
  styleUrls: ['./chart-container.component.scss']
})
export class ChartContainerComponent implements OnInit, AfterViewInit {

  public chartConfig = ChartConfig;

  constructor() {
  }

  ngOnInit(): void {
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
}
