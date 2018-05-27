import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserTodoComponent } from './user-todo/user-todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { UsersRoutingModule } from './users-routing.module';
import { GmapArticleComponent } from './components/gmap-article/gmap-article.component';

@NgModule({
  imports: [CommonModule, UsersRoutingModule, NgbPaginationModule],
  declarations: [
    UserListComponent,
    UserItemComponent,
    UserTodoComponent,
    TodoItemComponent,
    GmapArticleComponent
  ],
  exports: [UserListComponent, UserTodoComponent]
})
export class UsersModule {}
