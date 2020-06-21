import {AfterViewInit, Component, OnInit} from '@angular/core';
import {version} from '../../../../package.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  appVersion: string;

  constructor() {
  }

  ngOnInit(): void {
    this.appVersion = version;
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
