import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private httpClient = inject(HttpClient);
  private url = 'https://jsonplaceholder.typicode.com/';

  async getObject<T>(id: number, endpoint: String, callback: (value: T) => void) {
    let x: T = await firstValueFrom(this.httpClient
      .get<T>(this.url + endpoint + '/' + id));
    callback(x);
    return x;
  }
}
