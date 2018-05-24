import { Injectable } from '@angular/core';
import {map, catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { User } from './core/models/user';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  constructor(private http: HttpClient) { }

  public getDataUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3030/users')
      .pipe(
        catchError(error => {
          console.log(error.message || 'Server error');
          return throwError(error.message);
        }));
  }

}
