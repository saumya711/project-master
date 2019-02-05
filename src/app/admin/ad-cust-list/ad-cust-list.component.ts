import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ad-cust-list',
  templateUrl: './ad-cust-list.component.html',
  styleUrls: ['./ad-cust-list.component.scss']
})
export class AdCustListComponent implements OnInit {
elementsCustomer:any = [];
  userId: any;
   
constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAllUsers().subscribe(data=>{
      for(let i in data){
        console.log(data[i].userRoll);
        if(data[i].userRoll === 1){

          console.log(data);
          this.elementsCustomer.push((data[i]))
        }
      }
      
    },
    err=>{
      console.log(err);
    })
  }
  headElements = ['ID', 'Name', 'Userame', 'Email', 'Telephone', 'Address' ];
  
  onClickdelete(userId){
    if(confirm("Are you sure block this user?")){
    console.log(userId)
      this.authService.deleteUser(userId).subscribe(
        res=>console.log(res),
        err=>console.log(err),
      )
      alert("successfully blocked")
    }
    }
  }
  
  


