import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListcustomerComponent } from './listcustomer/listcustomer.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListcustomerComponent,
    CreatecustomerComponent,
    UpdatecustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
