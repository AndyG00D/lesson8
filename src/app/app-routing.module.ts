import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: './posts/posts.module#PostsModule'
  },
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule'
  },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
