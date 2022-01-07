import { TodoListService } from './../../services/todo-list.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo-list';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-items-list',
  templateUrl: './todo-items-list.component.html',
  styleUrls: ['./todo-items-list.component.scss']
})
export class TodoItemsListComponent implements OnInit {

  public todoList$: Observable<Todo[]>;
  public item: Todo;
  public pageIndex: number;

  constructor(private todoListService:TodoListService) { }

  ngOnInit(): void {
    this.todoList$ = this.todoListService.getTodos();

  }

  pageEvent(event) {
    this.pageIndex = event.pageIndex
  }

  showItem(item) {
    this.item = item;
  }


}
