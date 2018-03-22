import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LocalStorageComponent } from './components/local-storage/local-storage.component';
import { CheckComponent } from './components/check/check.component'; 

// import { TodolistComponent } from './components/todolist/todolist.component';
// import { GoodslistComponent } from './components/goodslist/goodslist.component';
// import { VoterComponent } from './components/voter/voter.component';
// import { AComponent } from './components/a/a.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalStorageComponent,
    CheckComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
