import {Injectable,EventEmitter} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs'
@Injectable()
export class TodoService{
  changeTodo=new EventEmitter();
  constructor(private http:Http){
  }
  getHttp(){
    return this.http.get('data/test.json').map(json=>json.json());
  }
}
