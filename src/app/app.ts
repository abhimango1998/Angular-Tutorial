import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummyUsers';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: false,
})
export class App {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get getSelectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectedUser(id: string) {
    this.selectedUserId = id;
  }
}
