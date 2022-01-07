import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TodoItemsListComponent } from './components/todo-items-list/todo-items-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoListService } from 'src/app/services/todo-list.service';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TodoItemsListComponent,
    TodoItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
