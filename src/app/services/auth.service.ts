import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }


  login(user){
    console.log("login route")
    return this.http.post('url', user);
 
}

isLogged(){
    if(localStorage.getItem('token')){ 
        return true;
    }
    return false;
}   

logOut(){
    localStorage.removeItem('token');
    this.router.navigate([''])
}

public getAllItems(): Observable<any>{
    return this.http.get(`http://localhost:8085/api/item/all`);
  }

  public addNewCategory(category): Observable<any>{
    return this.http.post<Category>('http://localhost:8085/api/home/category/add',category);
  }

}
