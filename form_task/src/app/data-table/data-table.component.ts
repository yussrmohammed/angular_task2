import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../shared/user.service';
import { DeleteConfirmationComponent } from './delete-confirmation.component';

const ELEMENT_DATA = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  id:number=0

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
    this.userservice.delete(id).subscribe(res=>{
      console.log(res)
      this.userservice.getUsers().subscribe((res:object|any)=>{
        this.usersData=res
      })
    })


  }
  
  openDialog() {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  

}
