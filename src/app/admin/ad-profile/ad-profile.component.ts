import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ad-profile',
  templateUrl: './ad-profile.component.html',
  styleUrls: ['./ad-profile.component.scss']
})
export class AdProfileComponent implements OnInit {
  newCategory: Category=new Category();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onClickAddCategory() {
    this.authService.addNewCategory(this.newCategory).subscribe(data=>{
      console.log(this.newCategory);
      window.alert("saved");
      console.log(data);
    })
     }

}
