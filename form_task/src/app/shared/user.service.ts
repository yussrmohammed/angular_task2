import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  add(userdata:object){
 this.http.post("http://localhost:3000/user", userdata).subscribe(res=>{
  console.log(res)
 })
    
  }
  getUsers(){
    return this.http.get("http://localhost:3000/user")
  }
  delete(id:number){
   return this.http.delete(`http://localhost:3000/user/${id}`)
    
  }
  getUser(id:number){
    return this.http.get<User>(`http://localhost:3000/user/${id}`)
  }
  updateUser(uesrdata:object,id:number){
   return this.http.put(`http://localhost:3000/user/${id}`,uesrdata)
  
  }
 public userId=new BehaviorSubject('')

  getId(id:string){
    this.userId.next(id)
  }
 recivedId=this.userId.asObservable()
}

