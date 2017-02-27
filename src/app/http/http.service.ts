import {Injectable} from '@angular/core';
import {Http,URLSearchParams,Headers, RequestOptions} from '@angular/http';
import {Observable,Subject} from 'rxjs'
@Injectable()
export class HttpService{
  constructor(private http:Http){}
  keyword=new Subject<string>();
  getStudents(name:string){
    var params=new URLSearchParams();
    params.set('name',"hello");
    params.set('rank',"time");
  return  this.http.get('/data/person.json',{search:params}).map(
      json=>json.json()
    )
  }
  httpPost(){
    var headers = new Headers({ 'Content-Type': 'application/json' });
    var body={
      name:"hello",
      content:'angular2.0'
    }
    this.http.post('/manage/login',JSON.stringify(body),{headers:headers}).map(data=>console.log(data)).catch(err=>{
     if(err){
        return Observable.throw(err);
      }
      return [];
    })
  }
}
