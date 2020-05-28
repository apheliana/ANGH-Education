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
  get lastname(): string {
    return this._lastname;
  }
  set lastname(value) {
    this._lastname = value;
  }
  private _lastname = '';
  get nameFull(): string {
    return this._name + " " + this._lastname;
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
