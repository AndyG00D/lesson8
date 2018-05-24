import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Todo } from './core/models/todo';

@Injectable({
  providedIn: 'root'
})
export class GetTodoService {

  constructor(private http: HttpClient) { }

  public getDataTodo(userIdFromUrl: number): Observable<Todo> {
    return this.http.get<Todo>('http://localhost:3030/todos?userId=' + userIdFromUrl.toString())
      .pipe(
        catchError(error => {
          console.log(error.message || 'Server error');
          return throwError(error.message);
        }));
  }
}
