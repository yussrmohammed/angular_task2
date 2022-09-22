import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  add(userdata:object){
 this.http.post("http://localhost:3000/employee/add", userdata, { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe(res=>{
  console.log(res)
 })
    
  }
  getUsers(){
    return this.http.get("http://localhost:3000/employee" , { headers: new HttpHeaders({ 'Content-Type': 'application/json' })})
  }
  delete(id:string){
   return this.http.delete(`http://localhost:3000/employee/${id}` )
    
  }
  getUser(id:string){
    return this.http.get<User>(`http://localhost:3000/employee/${id}` , { headers: new HttpHeaders({ 'Content-Type': 'application/json' })})
  }
  updateUser(uesrdata:object,id:string){
   return this.http.put(`http://localhost:3000/employee/${id}`,uesrdata )
  
  }
 public userId=new BehaviorSubject('')

  /*getId(id:string){
    this.userId.next(id)
  }
 recivedId=this.userId.asObservable()*/
}

