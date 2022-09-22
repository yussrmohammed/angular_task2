import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  hide = true;
  isLoggedIn = false;
  constructor(private loginservice:LoginService,private router: Router) { }
  registerdata= new FormGroup({
    username:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z].*')]),
    email: new FormControl('',[Validators.required,Validators.email]) ,
   password: new FormControl('',[Validators.minLength(8),Validators.required]),

  
  
  })
  logindata= new FormGroup({

    email: new FormControl('',[Validators.required,Validators.email]) ,
   password: new FormControl('',[Validators.minLength(8),Validators.required]),

  
  
  })
  signUp(){
    this.loginservice.register(this.registerdata.value)


  }
  logIn(){
    this.loginservice.login(this.logindata.value).subscribe((res:any)=>{
      this.loginservice.saveToken(res.auth_token)
      this.isLoggedIn = true;
      this.router.navigate(['/form'])

    })
  }


  ngOnInit(): void {
    if(this.loginservice.getToken()){
      this.isLoggedIn = true; 
      this.router.navigate(['/form'])
    }
  }

}
