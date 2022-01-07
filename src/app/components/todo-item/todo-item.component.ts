import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo-list';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit, AfterContentChecked {

  @Input() item: Todo;
  public favoriteItem: Todo[] = [];
  public isExists: boolean;
  public textButton: string = '';
  public localStorageItem: any[] = JSON.parse(localStorage.getItem('favorite')) ?? [];
  public isImportant;

  constructor() { }
  ngOnInit(): void { }

  ngAfterContentChecked(): void {
     const isItemExis =  this.localStorageItem.find(item =>  item.id === this.item?.id);
     if (isItemExis) {
      this.isImportant = true;
     } else {
      this.isImportant = false;
     }
      this.isImportant === true ? this.textButton = 'Important remove' : this.textButton = 'Important save';

  }

  save(item) {
    const newItem = {
      completed: item.completed,
      id: item.id,
      title: item.title,
      userId: item.userId,
      isImportant: true
    }
    this.localStorageItem.push(newItem)
  }

  remove(item) {
    for (let i = 0; i < this.localStorageItem.length; i++) {
      const element = this.localStorageItem[i];
      if (element.id == item.id) {
        this.localStorageItem.splice(i, 1)
        break;
      }
    }

  }

  saveOrDelete(item: Todo) {
    this.localStorageItem = JSON.parse(localStorage.getItem('favorite')) ?? [];

    this.isExists = this.localStorageItem.some(x => {
      if (x.id == item.id) {
        return true;
      } else {
        return false;
      }
    });
    if (this.isExists) {
      this.remove(item);
      this.isImportant = false;
      this.textButton = 'Important save'
    } else {
      this.save(item);
      this.isImportant = true;
      this.textButton = 'Important remove'
    }
    localStorage.setItem('favorite', JSON.stringify(this.localStorageItem));
  }
}
