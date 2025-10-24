import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { IUser } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  standalone: false,
})
export class User {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) user!: IUser;
  @Input({ required: true }) isSelected!: boolean;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  get imagePath() {
    return '/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
