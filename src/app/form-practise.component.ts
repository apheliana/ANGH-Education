import { Component } from '@angular/core';

@Component({
  templateUrl: './form-practise.component.html'
})
export class FormPractiseComponent {
  personsname='';
  personsage=0;
  aile: Person[] = [];

  enterPersonsInfo(): void {
    
    const ebeveyn = new Person();
      ebeveyn.name = this.personsname;
      ebeveyn.age = this.personsage;
    
      this.aile.push(ebeveyn);

    console.log('PersonsInformation',this.aile);
  }
}

class Person {
  name: string = '';
  age: number = 0;
}