import { TestBed, inject } from '@angular/core/testing';

import { GetTodoService } from './get-todo.service';

describe('GetTodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetTodoService]
    });
  });

  it('should be created', inject([GetTodoService], (service: GetTodoService) => {
    expect(service).toBeTruthy();
  }));
});
