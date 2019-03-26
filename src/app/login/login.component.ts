import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any;
  invalidLogin = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
    this.form = this.fb.group({
      email: ['', [
        Validators.email,
        Validators.required
      ]],
      password: ['', Validators.required]
    })
   }

  ngOnInit() {
  }

  onSubmit(form:any) {
    console.log(form.value);
    this.auth.login(form.value).subscribe(res => console.log(res))
  }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

}
