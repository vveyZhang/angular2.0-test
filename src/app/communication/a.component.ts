import {Component,OnDestroy} from "@angular/core";
import {TodoService} from'./todoService';
import {Http} from '@angular/http'

@Component({
  selector:'a-child',
  template:`<div>
  <p>我是子组件A</p>
  <h1>B组件让我{{aStatus}}</h1>
  </div>`
})
export class AComponent implements OnDestroy{
  aStatus='nothing';
  constructor(private todoService:TodoService,private http:Http){
    this.todoService.changeTodo.subscribe(todo=>{
      this.aStatus=todo
    });
    this.todoService.getHttp().subscribe(json=>console.log(json))
  }
  ngOnDestroy(){
    this.todoService.changeTodo.unsubscribe();
  }
}
