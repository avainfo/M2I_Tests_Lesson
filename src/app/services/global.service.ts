import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private httpClient = inject(HttpClient);
  private url = 'https://jsonplaceholder.typicode.com/';

  async getObject<T>(id: number, endpoint: String, callback: (value: T) => void) {
    this.httpClient
      .get<T>(this.url + endpoint + '/' + id)
      .subscribe(value => callback(value))
  }
}
