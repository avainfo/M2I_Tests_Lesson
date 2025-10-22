import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TodosService} from './services/todos.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('M2iTodoApp');

  constructor(public todoService: TodosService) {
  }

  async clickButton() {
    this.todoService.getTodo(1);
  }
}
