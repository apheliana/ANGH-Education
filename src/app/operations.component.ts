import { Component } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html'
})
export class OperationsComponent {
  username = '';
  usernameTemp = '';
  number1 = 0;
  number2 = 0;
  operation: 'add' | 'subtract' | 'multiply' | 'divide' | 'please choose' = 'please choose';
  result = 0;

  changeOperation(newOperation): void {
    this.operation = newOperation;
  }

  calculate(): void {
    switch (this.operation) {
      case 'add': {
        this.result = Number(this.number1) + Number(this.number2);
        return;
      }
      case 'subtract': {
        this.result = Number(this.number1) - Number(this.number2);
        return;
      }
      case 'multiply': {
        this.result = Number(this.number1) * Number(this.number2);
        return;
      }
      case 'divide': {
        this.result = Number(this.number1) / Number(this.number2);
        return;
      }
      default: {
        throw new Error('Unknown operation: ' + this.operation);
      }
    }
  }
}