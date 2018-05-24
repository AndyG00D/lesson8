import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { Todo } from '../../core/models/post';
import { GetTodoService } from '../../get-todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {
  public loading$ = new BehaviorSubject(true);
  private destroy = new Subject();
  private todo: Todo;

  constructor(
    private dataTodoService: GetTodoService,
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
        todo => {
          this.todo = todo;
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

  private loadTodo(id: number) {
    return this.dataTodoService.getDataTodo(id);
  }
}
