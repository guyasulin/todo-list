import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo-list';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit, AfterContentChecked {

  @Input() item: Todo;
  @Input() showfavorit: boolean;
  public favoriteItem: Todo[] = [];
  public isExists: boolean;
  public textButton: string = '';
  public localStorageItem: any[] = JSON.parse(localStorage.getItem('favorite'));
  public show: boolean;
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  ngAfterContentChecked(): void {
   this.showfavorit === true ? this.textButton = 'Important remove' : this.textButton = 'Important save'
  }


  save(item) {
    const newItem = {
    completed: item.completed,
    id: item.id,
    title: item.title,
    userId: item.userId,
    isImportant: true
  }
    this.favoriteItem.push(newItem)
    localStorage.setItem('favorite', JSON.stringify(this.favoriteItem));
  }

  remove(item) {
    for (let i = 0; i < this.favoriteItem.length; i++) {
      const element = this.favoriteItem[i];
      if (element.id == item.id) {
        this.favoriteItem.splice(i, 1)
        break;
      }
    }
    localStorage.setItem('favorite', JSON.stringify(this.favoriteItem));

  }

  saveOrDelete(item: Todo) {
    this.isExists = this.favoriteItem.some(x => {
      if (x.id == item.id) {
        return true;
      } else {
        return false;
      }
    });
    if (this.isExists) {
      this.remove(item);
      this.textButton = "Important save ";
      this.showfavorit = false;

    } else {
      this.save(item);
      this.textButton = "Important remove ";
      this.showfavorit = true;
    }
    this.ref.detectChanges()

  }
}
