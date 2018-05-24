import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: ':id', component: TodoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule { }
