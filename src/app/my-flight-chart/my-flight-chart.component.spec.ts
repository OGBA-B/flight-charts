import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFlightChartComponent } from './my-flight-chart.component';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ChartsModule } from 'ng2-charts';
import { PapaParseModule } from 'ngx-papaparse';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('MyDoughnutChartComponent', () => {
  let component: MyFlightChartComponent;
  let fixture: ComponentFixture<MyFlightChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatProgressBarModule,ChartsModule,HttpClientTestingModule,PapaParseModule],
      declarations: [ MyFlightChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFlightChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
