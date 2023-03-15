import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { User } from '../pages/login/domain/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly _httpClient: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this._httpClient
      .get<User[]>(`https://jsonplaceholder.typicode.com/users`)
      .pipe(delay(1000));
  }
}
