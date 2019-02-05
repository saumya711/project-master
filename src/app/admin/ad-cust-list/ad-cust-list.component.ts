import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ad-cust-list',
  templateUrl: './ad-cust-list.component.html',
  styleUrls: ['./ad-cust-list.component.scss']
})
export class AdCustListComponent implements OnInit {
elements: any 
   
constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAllUsers().subscribe(data=>{
      this.elements=data;
      console.log(data);
      
    },
    err=>{
      console.log(err);
    })
  }
  headElements = ['ID', 'Name', 'Userame', 'Email', 'Telephone', 'Address' ];
  
  onClickdelete(){
    if(confirm("Are you sure block this user?")){
      //this.deleteUser(); 
      alert("succesfully blocked")
    }
  }

}
