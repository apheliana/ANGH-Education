import { Component } from '@angular/core';
import { format, parseISO, isValid } from 'date-fns';
import { Person } from './Person';
import { PersonData } from './PersonData';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './form-practise.component.html',
  styleUrls: ['./form-practise.component.css'],
})
export class FormPractiseComponent {
  family: Person[] = [];
  familyResult : Person[] = [];
  birthDateText: string = '';
  errorMessageArray: string[];
  haveChildren: boolean = false;
  isSmoking: boolean = false;
  noOfChildren: number = 0;
  name: string = '';
  nameLast: string = '';
  searchAll: string = '';
  searchName: string = '';
  selectedperson: Person = null;
  viewState: 'add' | 'update' = 'add';

  constructor(private httpClient: HttpClient) {
    const familyJSON = localStorage.getItem('family');
    const family = JSON.parse(familyJSON) as PersonData[];
    if (family !== null) {
      this.family = family.map(dataItem => {
        console.log('dataItem', dataItem);
        const person = new Person();
        person.name = dataItem._name;
        person.nameLast = dataItem._nameLast;
        person.birthDate = parseISO(dataItem.birthDate);
        person.isSmoking = dataItem.isSmoking;
        person.haveChildren = dataItem.haveChildren;
        person.noOfChildren = dataItem.noOfChildren;
        console.log('person', person);
        return person;
      });
      this.familyResult  = this.family;
    }
  }

  getAPI(): void {
    const url = 'https://api.exchangeratesapi.io/latest';
    this.httpClient.get(url).subscribe(result => console.log('r', result));
  }

  cancelPersonsInfo(): void {
    this.reset();
    this.viewState = 'add';
  }

  deleteRow(person: Person): void {
    console.log('silinecek kisi: ' + person.name);
    this.family = this.family.filter(item => item !== person);
    this.familyResult  = this.family;
    this.save();
  }

  enterPersonsInfo(): void {
    if (!this.validateForm()) {
      return;
    }
    const family = new Person();
    family.name = this.name;
    family.nameLast = this.nameLast;
    family.birthDate = parseISO(this.birthDateText);
    family.isSmoking = this.isSmoking;
    family.haveChildren = this.haveChildren;
    family.noOfChildren = this.noOfChildren;

    console.log('family', family);

    this.family.push(family);
    this.reset();
    this.save();
  }

  searchByName() {
    this.familyResult = this.family.filter(item => item.name.includes(this.searchName));
  }

  searchInAll() {
    this.familyResult = this.family.filter(item => {
      const values = Object.values(item).join();
      console.log('v', values);
      return values.includes(this.searchAll);
    });
  }

  selectRow(person: Person): void {
    this.name = person.name;
    this.nameLast = person.nameLast;
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
    this.selectedperson.name = this.name;
    this.selectedperson.nameLast = this.nameLast;
    this.selectedperson.birthDate = parseISO(this.birthDateText);
    this.selectedperson.isSmoking = this.isSmoking;
    this.selectedperson.haveChildren = this.haveChildren;
    this.selectedperson.noOfChildren = this.noOfChildren;
    this.reset();
    this.save();
    this.viewState = 'add';
  }

  private reset(): void {
    this.name = '';
    this.nameLast = '';
    this.birthDateText = '';
    this.haveChildren = false;
    this.noOfChildren = 0;
    this.selectedperson = null;
    delete this.errorMessageArray;
  }

  private save(): void {
    localStorage.setItem('family', JSON.stringify(this.family));
  }

  private validateForm(): boolean {
    this.errorMessageArray = [];
    if (this.name === '') {
      this.errorMessageArray.push('Name can not be empty');
    }
    if (this.nameLast === '') {
      this.errorMessageArray.push('Last name can not be empty');
    }
    if (!isValid(parseISO(this.birthDateText))) {
      this.errorMessageArray.push('Date is invaild');
    }
    if (this.haveChildren && this.noOfChildren === 0) {
      this.errorMessageArray.push('Please answer: "How many children do you have?"');
    }
    return this.errorMessageArray.length === 0;
  }
}