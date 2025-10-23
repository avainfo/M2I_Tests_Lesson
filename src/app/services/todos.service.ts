import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../models/todo';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private httpClient = inject(HttpClient);
  private url = 'https://jsonplaceholder.typicode.com/todos';

  async getTodo(id: number) {
    let x = firstValueFrom(this.httpClient.get<Todo>(this.url + '/' + id.toString()));
    return (x);
  }
}
