import {Component} from "@angular/core";
import {TodoService} from'./todoService'
@Component({
  selector:'b-child',
  template:`<div>
  <p>我是子组件B</p>
  <h1>我想让A组件：
  <button (click)="changeA('eating')">eating</button>
  <button (click)="changeA('sleeping')">sleeping</button>
 </h1>
  </div>`
})
export class BComponent{
  constructor(private todoService:TodoService){
  }
  changeA(todo){
    this.todoService.changeTodo.emit(todo)
  }
}
