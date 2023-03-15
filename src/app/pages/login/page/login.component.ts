import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.createFormLogin();
  }

  private createFormLogin(): void {
    this.loginForm = this._formBuilder.group({
      email: '',
      password: '',
    });
  }

  public onLogin(): void {
    this._router.navigate(['user']);
  }
}
