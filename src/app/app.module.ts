import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeaderComponent} from './components/dashboard/components/header/header.component';
import {FooterComponent} from './components/dashboard/components/footer/footer.component';
import {ChartContainerComponent} from './components/dashboard/components/chart-container/chart-container.component';
import {ChartsModule} from 'ng2-charts';
import {Ng5SliderModule} from 'ng5-slider';
import {SimpleTimer} from 'ng2-simple-timer';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ChartContainerComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    Ng5SliderModule
  ],
  providers: [SimpleTimer],
  bootstrap: [AppComponent]
})
export class AppModule {
}
