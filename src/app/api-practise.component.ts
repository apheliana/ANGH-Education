import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exchange } from './Exchange';
import { Rates } from './Rates';

@Component({
  templateUrl: './api-practise.component.html',
})
export class APIPractiseComponent {
  apiArray: any[][];
  apiResult: Rates;
  apiBase: string = '';
  apiDate: string = '';
  
  constructor(private httpClient: HttpClient) {
    const url = 'https://api.exchangeratesapi.io/latest';
    this.httpClient.get<Exchange>(url).subscribe(result => {
      this.apiDate = result.date;
      this.apiBase = result.base;
      this.apiResult = result.rates;
      const apiArray = Object.keys(result.rates).map((key) => [key, result.rates[key]]);
      this.apiArray = apiArray;
    })
  }
}