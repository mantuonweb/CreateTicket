import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Accordion } from './accordion';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,Accordion
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
