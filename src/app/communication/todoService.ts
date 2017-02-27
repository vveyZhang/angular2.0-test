import {Injectable,EventEmitter} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs'
@Injectable()
export class TodoService{
  changeTodo=new EventEmitter();
}
