import  {Component,OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {HttpService} from './http.service'
import {Observable} from 'rxjs'
@Component({
  selector:'person-main',
  providers:[HttpService],
  template:`<div>
  <input type="text" #searchWord (keyup)="search(searchWord.value)"/>
  <ul>
      <li *ngFor="let student of students">
         学生姓名：{{student.name}}，年龄：{{student.age}}
</li>
  </ul>
  </div>`
})
export class PersonComponent implements OnInit{
  students;
  constructor(private http:Http,private httpService:HttpService){
  }
  search(key:string){
    console.log(key);
    this.httpService.keyword.next(key)
  }
  ngOnInit(){
    this.httpService.httpPost();
   this.httpService.keyword
    .debounceTime(1000)
    .distinctUntilChanged()
    .switchMap(name =>{
        return name? this.httpService.getStudents(name):  Observable.of<any>([])
      })
     .catch(err=>{
        if(err){
          Observable.throw(err)
        }
        return  Observable.of<any>([])
      }).subscribe(data=>{
       console.log(data)
       this.students=data
     },err=>console.log(err));
  }
}
