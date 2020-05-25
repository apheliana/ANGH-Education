import { Component } from '@angular/core';
import { differenceInYears, format, parseISO } from 'date-fns';

@Component({
  templateUrl: './form-practise.component.html',
  styleUrls: ['./form-practise.component.css'],
})
export class FormPractiseComponent {
  personsname = '';
  aile: Person[] = [];
  aileResult : Person[] = []; 
  selectedperson: Person = null;
  viewState: 'add' | 'update' = 'add';
  errorMessage: string = '';
  birthDateText: string = '';
  searchName: string = '';
  searchAll: string = '';
  isSmoking: string = '';
  haveChildren: boolean = false;
  noOfChildren: number = 0;

  constructor() {
    const aileJSON = localStorage.getItem('aile');
    const aile = JSON.parse(aileJSON) as PersonData[];
    if (aile !== null) {
      this.aile = aile.map(dataItem => {
        console.log('dataItem', dataItem);
        const person = new Person();
        person.name = dataItem._name;
        person.birthDate = parseISO(dataItem.birthDate);
        person.isSmoking = dataItem.isSmoking;
        person.haveChildren = dataItem.haveChildren;
        person.noOfChildren = dataItem.noOfChildren;
        console.log('person', person);
        return person;
      });
      this.aileResult  = this.aile;
    }
  }

  searchByName() {
    this.aileResult = this.aile.filter(item => item.name.includes(this.searchName));
  }

  searchInAll() {
    this.aileResult = this.aile.filter(item => item.name.includes(this.searchAll));
  }
  
  enterPersonsInfo(): void {
    if (!this.validateForm()) {
      return;
    }
    const ebeveyn = new Person();
    ebeveyn.name = this.personsname;
    ebeveyn.birthDate = parseISO(this.birthDateText);
    ebeveyn.isSmoking = this.isSmoking;
    ebeveyn.haveChildren = this.haveChildren;
    ebeveyn.noOfChildren = this.noOfChildren;

    console.log('ebeveyn', ebeveyn);

    this.aile.push(ebeveyn);
    this.reset();
    this.save();
  }

  deleteRow(person: Person): void {
    console.log('silinecek kisi: ' + person.name);
    this.aile = this.aile.filter(item => item !== person);
    this.aileResult  = this.aile;
    this.save();
  }

  selectRow(person: Person): void {
    this.personsname = person.name;
    this.birthDateText = format(person.birthDate, 'yyyy-MM-dd');
    this.isSmoking = person.isSmoking;
    this.haveChildren = person.haveChildren;
    this.noOfChildren = person.noOfChildren;
    this.selectedperson = person;
    this.viewState = 'update';
  }

  updatePersonsInfo(): void {
    if (!this.validateForm()) {
      return;
    }

    this.selectedperson.name = this.personsname;
    this.selectedperson.birthDate = parseISO(this.birthDateText);
    this.selectedperson.isSmoking = this.isSmoking;
    this.selectedperson.haveChildren = this.haveChildren;
    this.selectedperson.noOfChildren = this.noOfChildren;
    this.reset();
    this.save();
    this.viewState = 'add';
  }

  cancelPersonsInfo(): void {
    this.reset();
    this.viewState = 'add';
  }

  private reset(): void {
    this.personsname = '';
    this.birthDateText = '';
    this.selectedperson = null;
  }

  private save(): void {
    localStorage.setItem('aile', JSON.stringify(this.aile));
  }

  private validateForm(): boolean {
    this.errorMessage = '';
    if (this.personsname === '') {
      this.errorMessage = ' * Name can not be empty * ';
    }
    return this.errorMessage.length === 0
  }
}

interface PersonData {
  birthDate: string;
  _name: string;
  isSmoking: string;
  haveChildren: boolean;
  noOfChildren: number;
}

class Person {
  get name(): string {
    return this._name;
  }
  set name(value) {
    if (value === 'ackhmed') {
      throw new Error('ackhmed olamaz!');
    }
    this._name = value;
  }
  private _name = '';
  
  birthDate: Date = new Date();

  get age(): number {
    return differenceInYears(new Date(), this.birthDate);
  }
  isSmoking: string = '';
  haveChildren: boolean = true;
  noOfChildren: number;
}