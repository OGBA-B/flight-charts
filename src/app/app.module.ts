import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CsvdataService} from '../../service/csvdata.service';
import { HttpClientModule } from '@angular/common/http';
import { PapaParseModule } from 'ngx-papaparse';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCancelChartComponent } from './my-cancel-chart/my-cancel-chart.component';
import { MyFlightChartComponent } from './my-flight-chart/my-flight-chart.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    MyCancelChartComponent,
    MyFlightChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    PapaParseModule,
    MatProgressBarModule
  ],
  providers: [CsvdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
