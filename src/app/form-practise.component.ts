import { Component } from '@angular/core';

@Component({
  templateUrl: './form-practise.component.html'
})
export class FormPractiseComponent {
  personsname='';
  personsage=0;
  aile: Person[] = [];
  selectedperson:Person=null;

  constructor() {
    if (localStorage.getItem('aile') !== null) {
      if (localStorage.getItem('aile').length < 3) {
        localStorage.removeItem('aile');
        } else {
            var retrievedAile = localStorage.getItem('aile');
            //console.log('retrievedAile', JSON.parse(retrievedAile));
            this.aile=JSON.parse(retrievedAile);
          }
    } else {}
  }

  enterPersonsInfo(): void {
    
    const ebeveyn = new Person();
      ebeveyn.name = this.personsname;
      ebeveyn.age = this.personsage;
    
      this.aile.push(ebeveyn);
      this.reset();
      this.save();

    console.log('PersonsInformation',this.aile);

  }

  deleteRow(person: Person): void {
    console.log('silinecek kisi: ' + person.name);
    this.aile = this.aile.filter(item => item !== person);
    this.save();
      }
  
  selectRow(person: Person): void{
    this.personsname=person.name;
    this.personsage=person.age;
    this.selectedperson = person;
  }
  updatePersonsInfo(): void {
    this.selectedperson.name=this.personsname;
    this.selectedperson.age=this.personsage;
    this.reset();
    this.save();
  }
  cancelPersonsInfo(): void {
    this.reset();
  }
  private reset(): void {
    this.personsname='';
    this.personsage=0;
    this.selectedperson=null;
  }
  private save(): void {
    localStorage.setItem('aile', JSON.stringify(this.aile));
  }
}




class Person {
  name: string = '';
  age: number = 0;
}