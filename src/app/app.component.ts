import { Component,Input} from '@angular/core';
import {TodoService} from './communication/todoService'
@Component({
  selector:'app-root',
  template:`<div>
  <h1>我是父组件</h1>
     <br/>
     <a-child></a-child>
     <br/>
     <b-child></b-child>
     <br/>
  </div>`,
  providers:[TodoService]
})
export class AppComponent{
}
