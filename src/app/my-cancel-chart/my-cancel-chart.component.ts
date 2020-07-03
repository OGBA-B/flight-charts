import { Component, OnInit, ViewChild } from '@angular/core';
import {CsvdataService} from '../../../service/csvdata.service';
import { Papa } from 'ngx-papaparse';
import {BaseChartDirective } from 'ng2-charts';
import { Flight } from 'src/Flight';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-cancel-chart.component.html',
  styleUrls: ['./my-cancel-chart.component.css']
})
export class MyCancelChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  public chartReady = false;

  public csvoptions = {
    header: true
  };

  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Total'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Months'
        }
      }],
    } 
  };

  public chartLabels =  ['January', 'February', 'March', 'April',
                            'May', 'June', 'July', 'August', 'September',
                            'October', 'November', 'December'];
  public chartType = 'line';
  public chartLegend = true;

  public chartData = [
    {data: [0,0,0,0,0,0,0,0,0,0,0] , label: 'N/A'}
  ];

  constructor(private csvData:CsvdataService, private papa: Papa) { }

  ngOnInit() {
    this.csvData.getCsvData().subscribe(
      csv => {
        //TODO: change 'myData' from any type to Flight class type
        let myData: Flight[] = this.papa.parse(csv, this.csvoptions).data;
        let cancellation_reasons = myData.map(result => result.CANCELLATION_REASON).
          filter(this.getUnique).sort(); // Get Unique Cancellation Reasons

        this.chartData.pop(); // Remove initial value
        cancellation_reasons.forEach(cancellation => {
          let sumArray = [];
          for (let month = 1; month <= 12; month++) { // Get sum of individual cancellation reasons per Month
            sumArray.push(myData.filter(function (value) {
              return (value.CANCELLATION_REASON == cancellation) && (value.MONTH == month);
            }).length)
          }

          this.chartData.push({ data: sumArray, label: cancellation.toString() });

        });
        this.refresh_chart();
      },
      error => {
        console.log(error);
      }
    )
  }

  //Refreshes the chart
  refresh_chart() {
      this.chart.chart.config.data.datasets = this.chartData;
      this.chart.ngOnInit();
      this.chartReady = true;

}

    /*function to get Unique data set from an Array 
    * @author Ogba
    * TODO: Add to to utils service
    */
    getUnique(value, index, self) { 
    return (self.indexOf(value) === index) && (value);
}

}
