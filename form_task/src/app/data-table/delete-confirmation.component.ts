import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent implements OnInit {

  constructor(private userservice:UserService , @Inject(MAT_DIALOG_DATA) public data:{userId:string}) { }
userId:string=''
  ngOnInit(): void {
  }
  deleteUser(){
    /*this.userservice.recivedId.subscribe((res)=>{
      this.userId=String(res)*/
      
      this.userservice.delete(this.data.userId).subscribe((res)=>{

        console.log(res,"deleted")
        
       
       
      
      
      
    })
    
  


  }

}
