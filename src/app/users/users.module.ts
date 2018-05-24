import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { TodoComponent} from './todo/todo.component';
import { UsersListComponent } from './users-list/users-list.component';



@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [TodoComponent, UsersListComponent]
})
export class UsersModule { }
