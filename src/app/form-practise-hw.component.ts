import { Component } from '@angular/core';

@Component({
  templateUrl: './form-practise-hw.component.html'
})
export class FormPractiseComponent {
  personsname='';
  personsage=0;

  enterPersonsInfo(): void {
    const ebeveyn = new PersonObj();
    ebeveyn.name = this.personsname;
    ebeveyn.age = this.personsage;
    console.log('PersonsInformation',ebeveyn);
  }
}


class PersonObj {
  name: string = '';
  age: number = 0;
}