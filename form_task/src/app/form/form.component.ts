import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../shared/login.service';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
userdata= new FormGroup({
  employeename:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z].*')]),
  email: new FormControl('',[Validators.required,Validators.email]) ,
  phonenumber: new FormControl('',[Validators.maxLength(11),Validators.minLength(11),Validators.pattern("^[0-9]*$"),Validators.required]),
  address: new FormControl('',[Validators.pattern('[a-zA-Z].*'), Validators.required]),
  gender: new FormControl('',Validators.required)


})

  constructor(private userservice:UserService, private authservice:LoginService) { }

  ngOnInit(): void {
  }
  addUser(){


    this.userservice.add(this.userdata.value)
    this.userdata.reset()
    window.location.reload()
  
  }
  logout(){
    this.authservice.logout()
  }

}
