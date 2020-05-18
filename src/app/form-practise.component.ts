import { Component } from '@angular/core';

@Component({
  templateUrl: './form-practise.component.html'
})
export class FormPractiseComponent {
  personsname='';
  personsage=0;
  

  enterPersonsInfo(): void {
    const aile = new PersonObj();
    
    const ebeveyn = new Person();
      ebeveyn.name = this.personsname;
      ebeveyn.age = this.personsage;
    
      aile.persons.push(ebeveyn);

    console.log('PersonsInformation',aile);
  }
}

class PersonObj {
  persons: Person[] = [];
}

class Person {
  name: string = '';
  age: number = 0;
}