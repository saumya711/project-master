import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-cust-list',
  templateUrl: './ad-cust-list.component.html',
  styleUrls: ['./ad-cust-list.component.scss']
})
export class AdCustListComponent implements OnInit {

  elements: any = [
    {id: 1, address: 'mathara', email:'anura@gmail.com', telephone: '0758645987', name: '@mdo', username:'anura'},
    {id: 2, address: 'kandy', email:'Ravindra@gmail.com', telephone: '0716594012', name: '@fat', username:'ab'},
    {id: 3, address: 'colombo', email:'Shriyani@gamil.com', telephone: '0783541203', name: '@twitter', username:'cd'}
  ];

  headElements = ['ID', 'address', 'Name', 'Contact_Number', 'E-mail', 'User name' ];

  constructor() { }

  ngOnInit() {
  }

}
