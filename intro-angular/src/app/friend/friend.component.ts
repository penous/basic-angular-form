import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css'],
})
export class FriendComponent implements OnInit {
  private firstName: string;
  private lastname: string;
  private email: string;
  private phoneNumber: string;
  private language: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    language: string
  ) {
    this.firstName = firstName;
    this.lastname = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.language = language;
  }

  ngOnInit(): void {}
}
