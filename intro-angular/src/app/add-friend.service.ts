import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Friend } from './friend';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class AddFriendService {
  url: string = 'http://localhost:9000';
  constructor(private http: HttpClient) {}

  addFriend(friend: Friend) {
    return this.http.post(`${this.url}/addFriend`, friend);
  }
}
