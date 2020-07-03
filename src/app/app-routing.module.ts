import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCancelChartComponent } from './my-cancel-chart/my-cancel-chart.component';
import { MyFlightChartComponent } from './my-flight-chart/my-flight-chart.component';

const routes: Routes = [
  {path: 'cancellations', component: MyCancelChartComponent},
  {path: 'flights', component: MyFlightChartComponent},
  {path: '**', component: MyCancelChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
