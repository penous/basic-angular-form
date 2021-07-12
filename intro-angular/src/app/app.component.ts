import { Component } from '@angular/core';
import { Friend } from './friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  languages = ['html', 'css', 'js', 'php', 'python', 'ruby'];
  selected = 'Choose your favorite languagee';

  trackByIndex(index: number) {
    return index;
  }

  friendModel = new Friend('', '', '', '', this.selected);
}
