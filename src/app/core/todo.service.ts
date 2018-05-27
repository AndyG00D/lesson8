import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrls } from './api-urls';
import { Todo } from './models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private api: HttpClient) {}

  getUserTodo(id) {
    return this.api.get<Todo[]>(ApiUrls.todos, {
      params: {
        userId: id,
        _sort: 'completed',
        _order: 'asc'
      }
    });
  }

  patchTodoCompleted(id: number, completed: boolean) {
    return this.api.patch(ApiUrls.todos + '/' + id, {'completed': completed});
  }
}
