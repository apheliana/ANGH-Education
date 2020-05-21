import { Component } from '@angular/core';

@Component({
  templateUrl: './form-practise.component.html'
})
export class FormPractiseComponent {
  personsname='';
  personsage=0;
  aile: Person[] = [];
  selectedperson:Person=null;
  viewState: 'add' | 'update' = 'add';
  ifNameEmpty: boolean = false;

  constructor() {
    const aileJSON = localStorage.getItem('aile');
    const aile = JSON.parse(aileJSON);
    if (aile !== null) {
      this.aile = aile;
    }
  }

  enterPersonsInfo(): void {
    if (this.validateForm()==false) {
      this.ifNameEmpty = true;
    } else{
      const ebeveyn = new Person();
      ebeveyn.name = this.personsname;
      ebeveyn.age = this.personsage;
    
      this.aile.push(ebeveyn);
      this.reset();
      this.save();

    console.log('PersonsInformation',this.aile);
    }

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
    this.viewState='update';
  }
  updatePersonsInfo(): void {
    this.selectedperson.name=this.personsname;
    this.selectedperson.age=this.personsage;
    this.reset();
    this.save();
    this.viewState='add';
  }
  cancelPersonsInfo(): void {
    this.reset();
    this.viewState='add';
  }
  private reset(): void {
    this.personsname='';
    this.personsage=0;
    this.selectedperson=null;
  }
  private save(): void {
    localStorage.setItem('aile', JSON.stringify(this.aile));
  }

  private validateForm(): boolean {
    if (this.personsname==null) {
      return true;
    } else {
      return false;
    }
  }
}

class Person {
  name: string = '';
  age: number = 0;
}