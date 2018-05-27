import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiUrls } from './api-urls';
import { User } from './models/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private api: HttpClient) {}

  getUserlist(page = 1, perPage = 3) {
    const params = {
      _limit: perPage.toString(),
      _page: page.toString(),
      // _expand: 'user'
    };
    return this.api
      .get<User[]>(ApiUrls.users, { params, observe: 'response' })
      .pipe(
        map(v => {
          return {
            data: v.body,
            total: +v.headers.get('X-Total-Count'),
            page,
            perPage
          };
        })
      );
  }
}
