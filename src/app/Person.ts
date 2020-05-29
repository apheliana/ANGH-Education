import { differenceInYears, format } from 'date-fns';
export class Person {
  birthDate: Date = new Date();
  haveChildren: boolean = true;
  isSmoking: boolean = false;
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
  get age(): number {
    return differenceInYears(new Date(), this.birthDate);
  }
  get isSmokingText(): string {
    return this.isSmoking ? 'Yes' : 'No';
  }
  get birthDateText(): string {
    return format(this.birthDate, 'dd.MM.yyyy');
  }
}
