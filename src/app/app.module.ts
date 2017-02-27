import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule,Routes} from '@angular/router';
//
import { AppComponent } from './app.component';
//
import {ArticleList} from './route/articleList'
import {ArticleDetails} from './route/articleDetails'

const appRoute:Routes=[
  {
    path:'',
    component:ArticleList
  },
  {
    path:'article',
    component:ArticleDetails
  }
];
@NgModule({
  declarations: [
    AppComponent,ArticleList,ArticleDetails
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}
