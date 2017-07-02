import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Accordion } from './accordion';
import { AppComponent } from './app.component';
import { CreateTicket } from './ticket/create.ticket';
import { AddNewTicket } from './ticket/addnew';
import { routeConfig } from './routingConfig'
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,Accordion,CreateTicket,AddNewTicket
  ],
    imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig,{ useHash: true })
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
