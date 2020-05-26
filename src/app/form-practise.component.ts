import { Component } from '@angular/core';
import { differenceInYears, format, parseISO } from 'date-fns';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
  templateUrl: './form-practise.component.html',
  styleUrls: ['./form-practise.component.css'],
})
export class FormPractiseComponent {
  aile: Person[] = [];
  aileResult : Person[] = [];
  birthDateText: string = '';
  errorMessage: string = '';
  haveChildren: boolean = false;
  isSmoking: string = '';
  noOfChildren: number = 0;
  personsname: string = '';
  personslastname: string = '';
  searchAll: string = '';
  searchName: string = '';
  selectedperson: Person = null;
  viewState: 'add' | 'update' = 'add';

  constructor() {
    const aileJSON = localStorage.getItem('aile');
    const aile = JSON.parse(aileJSON) as PersonData[];
    if (aile !== null) {
      this.aile = aile.map(dataItem => {
        console.log('dataItem', dataItem);
        const person = new Person();
        person.name = dataItem._name;
        person.lastname = dataItem._lastname;
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

  cancelPersonsInfo(): void {
    this.reset();
    this.viewState = 'add';
  }

  deleteRow(person: Person): void {
    console.log('silinecek kisi: ' + person.name);
    this.aile = this.aile.filter(item => item !== person);
    this.aileResult  = this.aile;
    this.save();
  }

  enterPersonsInfo(): void {
    if (!this.validateForm()) {
      return;
    }
    const ebeveyn = new Person();
    ebeveyn.name = this.personsname;
    ebeveyn.lastname = this.personslastname;
    ebeveyn.birthDate = parseISO(this.birthDateText);
    ebeveyn.isSmoking = this.isSmoking;
    ebeveyn.haveChildren = this.haveChildren;
    ebeveyn.noOfChildren = this.noOfChildren;

    console.log('ebeveyn', ebeveyn);

    this.aile.push(ebeveyn);
    this.reset();
    this.save();
  }

  searchByName() {
    this.aileResult = this.aile.filter(item => item.name.includes(this.searchName));
  }

   searchInAll() {
    this.aileResult = this.aile.filter(function (o) {
        return Object.keys(o).some(function (k) {
          this.o.forEach(element => {
            element.includes(this.searchAll);
            return o[k];
          });  
          
        });
    });
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
  _name: string;
  _lastname: string;
  birthDate: string;
  haveChildren: boolean;
  isSmoking: string;
  noOfChildren: number;
}

class Person {
  birthDate: Date = new Date();
  haveChildren: boolean = true;
  isSmoking: string = '';
  noOfChildren: number;

  get name(): string {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  private _name = '';

  get lastname(): string {
    return this._lastname;
  }
  set lastname(value) {
    this._lastname = value;
  }
  private _lastname = '';

  get fullname(): string {
    return this._name + " " + this._lastname;
  }
  
  get age(): number {
    return differenceInYears(new Date(), this.birthDate);
  }
}