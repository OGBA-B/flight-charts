import { Component, OnInit, ViewChild } from '@angular/core';
import {CsvdataService} from '../../../service/csvdata.service';
import { Papa } from 'ngx-papaparse';
import { BaseChartDirective } from 'ng2-charts';
import { Flight } from 'src/Flight';

@Component({
  selector: 'app-my-flight-chart',
  templateUrl: './my-flight-chart.component.html',
  styleUrls: ['./my-flight-chart.component.css']
})
export class MyFlightChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  chartReady: boolean = false;

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
          labelString: 'Days'
        }
      }],
    } 
  };

  public chartLabels =  ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
                            'Friday', 'Saturday', 'Sunday'];
  public chartType = 'bar';
  public chartLegend = true;

  public chartData = [
    {data: [0,0,0,0,0,0,0] , label: 'N/A'},
  ];

  constructor(private csvData:CsvdataService, private papa: Papa) { }

  ngOnInit() {
    this.csvData.getCsvData().subscribe(
      csv => {
        let myData:Flight[]= this.papa.parse(csv, this.csvoptions).data;
        let airlines = myData.map(result => result.AIRLINE).
          filter(this.getUnique).sort(); // Get Unique Cancellation Reasons

        this.chartData.pop(); // Remove initial value
        airlines.forEach(airline => {
          let sumArray = [];
          for (let day = 1; day <= 7; day++) { // Get sum of individual cancellation reasons per Month
            sumArray.push(myData.filter(function (value) {
              return (value.AIRLINE == airline) && (value.DAY_OF_WEEK == day);
            }).length)
          }

          this.chartData.push({ data: sumArray, label: airline.toString() });

        });
        this.refresh_chart();
      },
      error => {
        console.log(error);
      }
    )
  }
//TODO: Create utils class to hold common functions
  refresh_chart() {
      this.chart.chart.config.data.datasets = this.chartData;
      this.chart.ngOnInit();
      this.chartReady = true;
}

    /*function to get Unique data set from an Array 
    * @author Ogba
    * TODO: Add to to utils
    */
   getUnique(value, index, self) { 
    return (self.indexOf(value) === index) && (value);
}

}
