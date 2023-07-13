import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './store/todo.reducer';
import { ServiceService } from './service/service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ tasks: taskReducer })
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
