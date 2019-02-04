import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-sup-list',
  templateUrl: './ad-sup-list.component.html',
  styleUrls: ['./ad-sup-list.component.scss']
})
export class AdSupListComponent implements OnInit {

  elements: any = [
    {id: 1, address: 'Rathnapura', email:'akila@gmail.com', telephone: '0758445987', name: '@mdo', username:'akila'},
    {id: 2, address: 'kandy', email:'Ravindra@gmail.com', telephone: '0716594012', name: '@fat', username:'ab'},
    {id: 3, address: 'colombo', email:'Shriyani@gamil.com', telephone: '0783541203', name: '@twitter', username:'cd'}
  ];

  headElements = ['ID', 'address', 'Name', 'Contact_Number', 'E-mail', 'User name' ];

  constructor() { }

  ngOnInit() {
  }

}
