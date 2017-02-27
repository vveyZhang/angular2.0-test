import { Component,Input} from '@angular/core';
import {TodoService} from './communication/todoService'
@Component({
  selector:'app-root',
  template:`<router-outlet></router-outlet>`,
  providers:[TodoService]
})
export class AppComponent{
}
