import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Store, StoreModule} from "@ngrx/store";
import { ActionReducer, Action } from '@ngrx/store';

import { AppComponent }  from './app.component';

export const myReducer: ActionReducer<any> = (state: any, action: Action) => {
return state;
}

const storeManager = StoreModule.provideStore ({ currentSearch: myReducer });

@NgModule({
  imports: [ BrowserModule, StoreModule, storeManager],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
