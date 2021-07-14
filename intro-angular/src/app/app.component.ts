import { Component, OnInit } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  languages = ['Html', 'Css', 'Js', 'Php', 'Python', 'Ruby'];
  selected = 'Choose your favorite languagee';
  allFriends: Friend[] = [];

  ngOnInit(): any {
    this.getFriends(this.addFriendService.url);
    console.log(this.allFriends);
  }

  constructor(private addFriendService: AddFriendService) {}

  trackByIndex(index: number) {
    return index;
  }

  friendModel = new Friend('', '', '', '', this.selected);

  submitForm = (friendModel: Friend) => {
    this.addFriendService.addFriend(friendModel).subscribe(
      (data) => this.getFriends(this.addFriendService.url),
      (error) => "it didn't work"
    );
  };

  public async getFriends(url: string) {
    let data = await fetch(`${url}/allFriends`);
    let result = await data.json();

    this.allFriends = result;
  }
}
