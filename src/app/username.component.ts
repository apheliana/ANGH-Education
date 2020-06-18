import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./general.css'],
})
export class UsernameComponent {
  username = '';
  usernameTemp = '';

  changeUsername(): void {
    this.username = this.usernameTemp;
  }
}