import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { User } from 'src/app/shared/user';

import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private userservice:UserService  , private route:ActivatedRoute,
    private router:Router) { 
console.log(this.currentUser)
  }
    currentUser?:User

  

    
      
  ngOnInit(): void {
    let id= this.route.snapshot.paramMap.get('id')
 this.userservice.getUser(String(id)).subscribe((res:User)=>{
  this.currentUser=res
  console.log(this.currentUser)
  this.userData.setValue({
    employeename:this.currentUser.employeename,
    email:this.currentUser.email,
  phonenumber:this.currentUser.phonenumber,
  address:this.currentUser.address,
  gender:this.currentUser.gender,
  id:this.currentUser._id
  })
 })
     
     
   
     
     
    

   
  }
  userData= new FormGroup({
    employeename:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z].*')]),
    email: new FormControl('',[Validators.required,Validators.email]) ,
    phonenumber: new FormControl(0,[Validators.maxLength(11),Validators.minLength(11),Validators.pattern("^[0-9]*$"),Validators.required]),
    address: new FormControl('',[Validators.pattern('[a-zA-Z].*'), Validators.required]),
    gender: new FormControl('',Validators.required),
  
      id:new FormControl('')
    
    
    })
    update(id:string){
      this.userservice.updateUser(this.userData.value,id).subscribe((res)=>{
        console.log(res)
        this.router.navigate(['/form'])

      })
    }

}
