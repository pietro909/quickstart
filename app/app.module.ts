import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Store, StoreModule} from "@ngrx/store";
import { ActionReducer, Action } from '@ngrx/store';

import { AppComponent }  from './app.component';

export const myReducer: ActionReducer<CurrentSearch> = (state: CurrentSearch, action: Action) => {
return state;
}

const storeManager = StoreModule.provideStore ({ currentSearch: myReducer });

@NgModule({
  imports: [ BrowserModule, StoreModule, storeModule],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
