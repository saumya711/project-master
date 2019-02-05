import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { Subject} from 'rxjs';
import { User} from './../models/user';
//import { shareReplay, first} from 'rxjs/operators';
//import { tap } from 'rxjs/Operator';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser$: Subject<User> =new Subject<User>();
  user: User={
    id: 0,
    name:'',
    telephone:'',
    address: '',
    username:'',
    email:'',
    password:''

  }

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  /*login(username: String, password: String){
    return this.http.post('http://localhost:8080/api/auth/signin', {"usernameOrEmail": username, "password": password}) 
    .pipe(tap(
      res => this.setSession(res),
      err => {
        console.error(err); 
        alert(err.error.message);        
      }),
    shareReplay());
    }

    logout() {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('currentUser');
      this.currentUser$.next(undefined);
      this.router.navigate(['/home']);
    }*/

    isLoggedIn(): boolean {
      return !!localStorage.getItem('accessToken');
    }
    getUserById() {
      return this.http.get<User>(`http://localhost:8080/api/users/me`);
    }

    getUserProfile(username):any {
      return this.http.get(`http://localhost:8080/api/users/${username}`);
    }



public getAllAdvertisments(): Observable<any>{
    return this.http.get(`http://localhost:8080/api/home/all`);
  }

  public addNewCategory(category): Observable<any>{
    return this.http.post<Category>('http://localhost:8080/api/home/category/add',category);
  }
public getAllUsers(): Observable<any>{
  return this.http.get('http://localhost:8080/api/user/all');
}
 public deleteUser(): Observable<any>{
   return this.http.delete(`http://localhost:8080/api/user/DeleteItem`);
 }

}
