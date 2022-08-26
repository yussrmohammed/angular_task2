import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
userdata= new FormGroup({
userName:new FormControl(),
  email: new FormControl() ,
  phoneNumber: new FormControl(),
  address: new FormControl(),
  gender: new FormControl()


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
