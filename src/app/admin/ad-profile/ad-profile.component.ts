import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-profile',
  templateUrl: './ad-profile.component.html',
  styleUrls: ['./ad-profile.component.scss']
})
export class AdProfileComponent implements OnInit {
  newCategory: Category=new Category();

  constructor(private authService: AuthService,
    private router : Router) { }
  form = {
    "name": null,
    "username": null,
    "email": null,
    "telephone": null,
    "address": null,
    "password": null,
    "userRoll": null,
    "roles": []
  }
  success = null;
  errors = null;

  ngOnInit() {
  }

  submit(){
    console.log(this.form);
    this.authService.register(this.form).subscribe(

      data => this.tokenHandler(data),

      error => this.errorHandle(error)

    );

  }



  tokenHandler(data){

    console.log(data);
    this.success = "Success";
    this.form = {
      "name": null,
      "username": null,
      "email": null,
      "telephone": null,
      "address": null,
      "password": null,
      "userRoll": null,
      "roles": []
    }

    //this.router.navigateByUrl('');

  }



  errorHandle(error){

    console.log(error.error.errors[0].defaultMessage);

    this.errors = error.error.errors;

  }

  onClickAddCategory() {
    this.authService.addNewCategory(this.newCategory).subscribe(data=>{
      console.log(this.newCategory);
      window.alert("saved");
      console.log(data);
    })
     }

}
