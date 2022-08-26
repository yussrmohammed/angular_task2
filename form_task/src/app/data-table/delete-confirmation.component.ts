import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent implements OnInit {

  constructor(private userservice:UserService) { }

  ids:object=
  {}
  ngOnInit(): void {
  }
  deleteUser(id:number){
    this.userservice.delete(id).subscribe((res)=>{
      
      console.log(res)
      
     
    })


  }

}
