import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {GlobalService} from './services/global.service';
import {Todo} from './models/todo';
import {Post} from './models/post';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('M2iTodoApp2');

  constructor(public globalService: GlobalService) {
  }

  async clickButton() {
    await this.globalService.getObject<Todo>(15, "todos", (value) => {
      console.log("Value returned completed:", value.completed)
    });
  }

  async clickButton2() {
    await this.globalService.getObject<Post>(1, "posts", (value) => {
      console.log("Value returned body:", value.body)
    });
  }
}
