import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Todo} from '../../../core/models/user';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() onChanged = new EventEmitter<Todo>();

  change(currentTodo) {
    this.onChanged.emit(currentTodo);
  }

  constructor() {}

  ngOnInit() {}
}
