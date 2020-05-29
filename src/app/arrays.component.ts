import { Component } from '@angular/core';
import { PersonData } from './PersonData'; //interface

@Component({
  templateUrl: './arrays.component.html',
})
export class ArraysComponent {
  people: PersonObj[] = [];
  peopleResult : PersonObj[] = [];
  haveChildren: boolean = false;
  noOfChildren: number = 0;
  name: string = '';
  nameLast: string = '';
  searchAll: string = 'fatih';

  constructor() {
    const peopleJSON = localStorage.getItem('people');
    const people = JSON.parse(peopleJSON) as PersonData[];
    if (people !== null) {
      this.people = people.map(dataItem => {
        //console.log('dataItem', dataItem);
        const person = new PersonObj();
        person.name = dataItem._name;
        person.nameLast = dataItem._nameLast;
        person.haveChildren = dataItem.haveChildren;
        person.noOfChildren = dataItem.noOfChildren;
        //console.log('person', person);
        return person;
      });
      this.peopleResult  = this.people;
    }

    const array1 = this.people.filter(person => {
      Object.keys(person).forEach(key => {
        console.log('k&v', key, person[key]);
      });

      //console.log('key/value 2A', person['isSmoking']);
      //console.log('key/value 2B', person.isSmoking);

      const values = Object.values(person).join();
      // console.log('v', values);
      return values.includes(this.searchAll);
    });

  }

  deleteRow(person: PersonObj): void {
    console.log('silinecek kisi: ' + person.name);
    this.people = this.people.filter(item => item !== person);
    this.peopleResult  = this.people;
    this.save();
  }

  enterPersonsInfo(): void {
    const people = new PersonObj();
    people.name = this.name;
    people.nameLast = this.nameLast;
    people.haveChildren = this.haveChildren;
    people.noOfChildren = this.noOfChildren;

    console.log('family', people);

    this.people.push(people);
    this.reset();
    this.save();
  }

  private reset(): void {
    this.name = '';
    this.nameLast = '';
    this.haveChildren = false;
    this.noOfChildren = 0;
  }

  private save(): void {
    localStorage.setItem('people', JSON.stringify(this.people));
  }
}
class PersonObj {
  haveChildren: boolean = true;
  noOfChildren: number;
  get name(): string {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  private _name = '';
  get nameLast(): string {
    return this._nameLast;
  }
  set nameLast(value) {
    this._nameLast = value;
  }
  private _nameLast = '';
  get nameFull(): string {
    return this._name + " " + this._nameLast;
  }
}