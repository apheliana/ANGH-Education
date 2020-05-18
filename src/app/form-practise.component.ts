import { Component } from '@angular/core';

@Component({
  templateUrl: './form-practise.component.html'
})
export class FormPractiseComponent {
  personsnameTemp='Name?';
  personsname='';
  personsageTemp=0;
  personsage='';

  enterPersonsInfo(): void {
    const ebeveyn = new PersonObj();
    ebeveyn.name = this.personsnameTemp;
    ebeveyn.age = this.personsageTemp;
    console.log('PersonsInformation',ebeveyn);
  }
}


class PersonObj {
  name: string = '';
  age: number = 0;
}