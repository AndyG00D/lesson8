import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { Todo } from '../../core/models/user';
import { UsersService } from '../../core/users.service';

@Component({
  selector: 'app-user-todo',
  templateUrl: './user-todo.component.html',
  styleUrls: ['./user-todo.component.scss']
})
export class UserTodoComponent implements OnInit, OnDestroy {
  public loading$ = new BehaviorSubject(true);
  private destroy = new Subject();
  public todos: Todo[] = [];
  public text: string;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        tap(() => {
          this.loading$.next(true);
        }),
        takeUntil(this.destroy),
        switchMap(params => this.loadTodo(+params['id']))
      )
      .subscribe(
        todos => {
          this.todos = todos;
          this.text = JSON.stringify(todos);
          this.loading$.next(false);
        },
        err => {
          this.loading$.next(false);
        }
      );
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
    this.loading$.complete();
  }

  private loadTodo(id) {
    return this.usersService.detail(id);
  }
}
