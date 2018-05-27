import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;

  constructor() {}

  ngOnInit() {}
}
