import {Component,EventEmitter,Output} from '@angular/core';
@Component({
  selector:'my-event',
  template:`<h1 (click)="myClick()">我的点击模块</h1>`
})
export class MyEventComponent{
 @Output() myEvent=new EventEmitter();
  myClick(){
    this.myEvent.emit('我的事件执行')
  }
}
