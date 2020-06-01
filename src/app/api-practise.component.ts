import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exchange } from './Exchange';
import { ExchangeRate } from './ExchangeRate';

@Component({
  templateUrl: './api-practise.component.html',
})
export class APIPractiseComponent {
  apiArray: ExchangeRate[] = [];
  apiBase: string = '';
  apiDate: string = '';

  constructor(private httpClient: HttpClient) {
    const url = 'https://api.exchangeratesapi.io/latest';
    this.httpClient.get<Exchange>(url).subscribe(result => {
      this.apiDate = result.date;
      this.apiBase = result.base;
      this.apiArray = Object.keys(result.rates).map(key => new ExchangeRate(key, result.rates[key])); //map = forEach gibi, her bir satır için yeni bir sonuç    //result.rates[key]=o key için value neyse onu döndür 
    })
  }
}