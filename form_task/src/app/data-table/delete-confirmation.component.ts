import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent implements OnInit {

  constructor(private userservice:UserService) { }
userId:number=0
  ngOnInit(): void {
  }
  deleteUser(){
    this.userservice.recivedId.subscribe((res)=>{
      this.userId=Number(res)
      this.userservice.delete(this.userId).subscribe(()=>{
        console.log("deleted")
        
       
       
      })
    })
    
  


  }

}
