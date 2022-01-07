import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo-list';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item: Todo;
  public favoriteItem: Todo[]= [];

  constructor() { }

  ngOnInit(): void {

  }

  save(item) {
  this.favoriteItem.push(item)
    localStorage.setItem('fevorite', JSON.stringify(this.favoriteItem));
  }

  remove(item) {
    for (let i = 0; i < this.favoriteItem.length;i++) {
      const element = this.favoriteItem[i];
      if (element.id == item.id) {
        this.favoriteItem.splice(i, 1)
        break;
      }
    }

    localStorage.setItem('fevorite', JSON.stringify(this.favoriteItem));
  }

  saveOrDelete(item:Todo){
    let isExists = this.favoriteItem.some(x => {
      if (x.id == item.id) {
        return true;
      } else {
         return false;
      }
    });
    if (isExists) {
      this.remove(item)
    } else {
      this.save(item)
    }
  }
}
