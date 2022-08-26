import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private userservice:UserService) { }

  userData= new FormGroup({
    userName:new FormControl(),
      email: new FormControl() ,
      phoneNumber: new FormControl(),
      address: new FormControl(),
      gender: new FormControl(),
      id:new FormControl()
    
    
    })

      
  ngOnInit(): void {
  }

}
