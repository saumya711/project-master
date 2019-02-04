import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ad-advertsmnt',
  templateUrl: './ad-advertsmnt.component.html',
  styleUrls: ['./ad-advertsmnt.component.scss']
})
export class AdAdvertsmntComponent implements OnInit {
  elements:any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAllItems().subscribe(data=>{
      this.elements=data;
      console.log(data);
    },
    err=>{
      console.log(err);
    })
  }
  

}
