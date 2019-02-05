import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ad-sup-list',
  templateUrl: './ad-sup-list.component.html',
  styleUrls: ['./ad-sup-list.component.scss']
})
export class AdSupListComponent implements OnInit {
 elementsSupplier:any = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAllUsers().subscribe(data=>{

      for(let i in data){
        console.log(data[i].userRoll);
        if(data[i].userRoll === 2){

          console.log(data);
          this.elementsSupplier.push(data[i]);
        }
      }
     // console.log(data,"llllll");
      
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
        err=>console.log(err)
      )
      alert("successfully blocked")
    }
  }
  
}
