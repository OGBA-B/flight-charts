import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCancelChartComponent } from './my-cancel-chart.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ChartsModule } from 'ng2-charts';
import { PapaParseModule } from 'ngx-papaparse';
import { HttpClientTestingModule} from '@angular/common/http/testing';



describe('MyBarChartComponent', () => {
  let component: MyCancelChartComponent;
  let fixture: ComponentFixture<MyCancelChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatProgressBarModule,ChartsModule,HttpClientTestingModule,PapaParseModule],
      declarations: [MyCancelChartComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCancelChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
