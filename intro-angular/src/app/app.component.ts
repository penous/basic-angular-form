import { Component } from '@angular/core';
import { FriendComponent } from './friend/friend.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  languages = ['html', 'css', 'js', 'php', 'python', 'ruby'];
  selected = 'Choose your favorite languagee';

  trackByIndex(index: number, obj: any) {
    return index;
  }

  friend = new FriendComponent('', '', '', '', '');
}
