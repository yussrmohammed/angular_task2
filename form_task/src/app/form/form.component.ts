import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
userdata= new FormGroup({
userName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z].*')]),
  email: new FormControl('',[Validators.required,Validators.email]) ,
  phoneNumber: new FormControl('',[Validators.maxLength(11),Validators.minLength(11),Validators.pattern("^[0-9]*$"),Validators.required]),
  address: new FormControl('',[Validators.pattern('[a-zA-Z].*'), Validators.required]),
  gender: new FormControl('',Validators.required)


})

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }
  addUser(){


    this.userservice.add(this.userdata.value)
    this.userdata.reset()
    window.location.reload()
  
  }

}
