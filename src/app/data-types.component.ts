import { Component } from '@angular/core';

@Component({
  templateUrl: './data-types.component.html',
  styleUrls: ['./general.css'],
})
export class DataTypesComponent {
  constructor() {
    const fatih = new Parent();
    fatih.name = 'Fatih';
    fatih.age = 38;

    const ada = new Child();
    ada.age = 6;
    ada.name = 'Ada';
    fatih.children.push(ada);
    fatih.luckyNumbers = [1, 3, 5, 7];

    console.log('parent', fatih);

    const calculateSumOfLuckyNumbers = fatih.calculateSumOfLuckyNumbers();
    console.log('calculateSumOfLuckyNumbers', calculateSumOfLuckyNumbers);
  }
}

class Address {
  city: string = '';
  country: string = '';
}

class Company {
  name: string = '';
  address: Address = new Address();
}

class Parent {
  name: string = '';
  age: number = 0;
  address: Address = new Address();
  children: Child[] = [];
  luckyNumbers: number[] = [];

  calculateSumOfLuckyNumbers(): number {
    let total = 0;
    this.luckyNumbers.forEach(number => total += number);
    return total;
  }
}

class Child {
  name: string = '';
  age: number = 0;
}