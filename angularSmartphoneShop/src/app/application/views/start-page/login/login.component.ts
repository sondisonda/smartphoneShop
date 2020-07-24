import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from 'src/app/application/services/user/user.service';
import { LoginService } from 'src/app/application/services/login/login.service';
import { Router } from '@angular/router';
import { Users } from 'src/app/application/domain/external/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// formatownaie
export class LoginComponent {


  // trupy
  private logged = false;
  private userName = '';
  private password = '';
  private loginWarn = ' ';
  private loginForm: FormGroup;
  private signedUser: Users;



  constructor(
    public loginService: LoginService,
    private router: Router,
    private usersService: UserService,
    private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12), Validators.pattern('[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)')]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12), Validators.pattern('[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)')]]
    });
  }



  get f() {
    return this.loginForm.controls;
  }

  
  login() {
    this.userName = this.loginForm.get('userName').value;
    this.password = this.loginForm.get('password').value;
    this.usersService.loginUser(this.userName, this.password).subscribe((user: any) => {
      this.signedUser = user;
      if (this.signedUser) {
        this.loginService.updateCurrentRole(this.signedUser.roleType);
        this.loginService.updateCurrentUser(this.signedUser);
        this.loginWarn = '';
        this.logged = true;
        this.router.navigateByUrl('store');
      } else {
        this.loginWarn = 'Incorrect username or password';
      }
    });
  }

  signOut() {
    this.logged = false;
    this.loginService.role = null;
    this.loginService.user = null;
    this.router.navigateByUrl('start-page');
  }

  getLoginWarn(): string  {
    return this.loginWarn;
  }



}