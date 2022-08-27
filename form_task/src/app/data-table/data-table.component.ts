import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../shared/user.service';
import { DeleteConfirmationComponent } from './delete-confirmation.component';



@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

userid:string=""
  usersData=[
   
  ]
  displayedColumns = ["userName","email","phoneNumber","gender","address","actions"];
  
  constructor(private userservice:UserService , public dialog: MatDialog ) {
    this.userservice.getUsers().subscribe((res:object|any)=>{
      this.usersData=res
    
    }) 

  }

  ngOnInit(): void {
  
  }
  deleteUser(id:number){
    const dialogRef = this.dialog.open(DeleteConfirmationComponent)
   this.userid=String(id)
   this.userservice.getId(this.userid)
   console.log(this.userid)
   dialogRef.afterClosed().subscribe(()=>{
    this.userservice.getUsers().subscribe((res:object|any)=>{
      this.usersData=res
    })
   })
   

  }
  
  
  

}
