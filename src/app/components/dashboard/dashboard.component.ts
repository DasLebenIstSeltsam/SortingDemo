import {Component, OnInit} from '@angular/core';
import {version} from '../../../../package.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public appVersion: string;

  constructor() {
  }

  ngOnInit(): void {
    this.appVersion = version;
  }
}
