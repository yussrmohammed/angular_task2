import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    return this.http.get(`http://localhost:3000/user/${id}`)
  }
}

