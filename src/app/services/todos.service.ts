import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private httpClient = inject(HttpClient);
  private url = 'https://jsonplaceholder.typicode.com/todos';

  async getTodo(id: number) {
    this.httpClient.get<Todo>(this.url + '/' + id.toString()).subscribe(value => {
      console.log(value);
      console.log(value.completed);
    });
  }
}
// Todo : Global Service demo <T>
