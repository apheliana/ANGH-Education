import { Component } from '@angular/core';

@Component({
  templateUrl: './data-types.component.html'
})
export class DataTypesComponent {
  constructor() {
    const parent = new Parent();
    console.log('parent', parent);
  }
}

class Parent {
  name: string = '';
  age: number = 0;
  isSmoking: boolean = false;
}