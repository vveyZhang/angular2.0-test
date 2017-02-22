import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {InputComponent} from './basic/input.component'
import {AComponent} from './communication/a.component'
import {BComponent} from './communication/b.component'

@NgModule({
  declarations: [
    AppComponent,AComponent,BComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}
