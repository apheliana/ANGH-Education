import { Component } from '@angular/core';

@Component({
  templateUrl: './form-practise.component.html',
  styleUrls: ['./form-practise.component.css'],
})
export class FormPractiseComponent {
  personsname='';
  //personsage=0;
  aile: Person[] = [];
  selectedperson:Person = null;
  viewState: 'add' | 'update' = 'add';
  errorMessage: string = '';
  birthDate='';
  
   parseDate(birthDate) {
    if (birthDate === '') {
      return new Date(birthDate);
    } else {
      var parts = birthDate.match(/(\d+)/g);
      // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
      return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
    }
  }

  calculateAge() {
    var today = new Date();
    var birthday = this.parseDate(this.birthDate);
    var age = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    return age;
}

  constructor() {
    const aileJSON = localStorage.getItem('aile');
    const aile = JSON.parse(aileJSON);
    if (aile !== null) {
      this.aile = aile;
    }
  }

  enterPersonsInfo(): void {
    if (!this.validateForm()) {
      return;
    }
      const ebeveyn = new Person();
      ebeveyn.name = this.personsname;
      //ebeveyn.age = this.personsage;
      ebeveyn.bdate = this.parseDate(this.birthDate);
      ebeveyn.calculatedAge = this.calculateAge();
      
      this.aile.push(ebeveyn);
      this.reset();
      this.save();
  }

  deleteRow(person: Person): void {
    console.log('silinecek kisi: ' + person.name);
    this.aile = this.aile.filter(item => item !== person);
    this.save();
      }
  
  selectRow(person: Person): void{
    this.personsname=person.name;
    //this.personsage=person.age;
    this.selectedperson = person;
    this.viewState='update';
  }
  updatePersonsInfo(): void {
    if (this.validateForm()) {
      this.selectedperson.name=this.personsname;
      //this.selectedperson.age=this.personsage;
      //this.selectedperson.bdate=;
     
      this.reset();
      this.save();
      this.viewState='add';
    }
  }
  cancelPersonsInfo(): void {
    this.reset();
    this.viewState='add';
  }
  private reset(): void {
    this.personsname='';
    //this.personsage=0;
    this.selectedperson=null;
    this.birthDate='';
  }
  private save(): void {
    localStorage.setItem('aile', JSON.stringify(this.aile));
  }

  private validateForm(): boolean {
    this.errorMessage = '';
    if (this.personsname === '') {
      this.errorMessage = ' * Name can not be empty * ';
    }
    //if (Number(this.personsage) === 0) {
    //  this.errorMessage += ' * Age can only be positive numbers * ';
    //}
    return this.errorMessage.length === 0
  }
}

class Person {
  name: string = '';
  //age: number = 0;
  bdate: Date = new Date();
  calculatedAge: number = 0;
}