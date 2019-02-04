import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logBtnOff(){
    if(this.router.url === "/"){ 
      return false;
    }
    return true;

  }
}
