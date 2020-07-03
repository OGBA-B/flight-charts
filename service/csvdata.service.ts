import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CsvdataService {

  constructor(private _http: HttpClient) { }

  getCsvData() {
      return this._http.get('assets/flights_2015_sample.csv', { responseType: 'text' })
  }
}
