import {Component} from '@angular/core';
@Component({
  selector:'my-input',
  template:`
  <input type="text" #myInput [(ngModel)]="keyword" />
  <p>{{keyword}}</p>
  <p>{{myInput.value}}</p>
  <p>{{myInput.className}}</p>
  `
})
export class InputComponent{
  keyword='输入内容'
}

