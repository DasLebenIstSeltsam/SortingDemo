import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart-container',
  templateUrl: './chart-container.component.html',
  styleUrls: ['./chart-container.component.scss']
})
export class ChartContainerComponent implements OnInit, AfterViewInit {

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

    const chartContainerElement: HTMLElement = document.querySelector('#chart-container');
    chartContainerElement.style.height = `${window.innerHeight - (headerHeight + footerHeight)}px`;
  }
}
