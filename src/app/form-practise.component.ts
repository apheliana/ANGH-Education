import { Component } from '@angular/core';

@Component({
  templateUrl: './form-practise.component.html'
})
export class FormPractiseComponent {
  personsnameTemp = '';
  personsname = '';
  
  constructor() {
    const ebeveyn = new PersonObj();
    ebeveyn.name = this.enterPersonsInfo();
    console.log('PersonsInformation',ebeveyn);

  }
  
  enterPersonsInfo(): string {
    this.personsname = this.personsnameTemp;
    console.log(this.personsname);
    return this.personsname;
  }
}

class PersonObj {
  name: string = '';
}