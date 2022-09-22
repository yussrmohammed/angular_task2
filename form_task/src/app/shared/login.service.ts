import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient , private router:Router) { }

  register( admin:any){
    return this.http.post('http://localhost:3000/user/register', admin).subscribe(res=>{
      console.log(res)
    })

  }
  login(admin:any){
    return this.http.post("http://localhost:3000/user/login", admin , { headers: new HttpHeaders({ 'Content-Type': 'application/json' })})
      

  }
  getToken(){
    return window.localStorage.getItem('auth_token')

  }
  saveToken(token: string): void {
    window.localStorage.removeItem('auth_token');
    window.localStorage.setItem('auth_token', token);
  }

  logout() {
   window.localStorage.clear()
   this.router.navigate(['/login'])
  }
}
