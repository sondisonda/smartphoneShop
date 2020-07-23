import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// formatownaie
export class LoginComponent implements OnInit {


  // trupy
  private userName = '';
  private password = '';
  // trupy
  private loginWarn = '';
  private loginForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  // po co to
  ngOnInit() {

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
    console.log('Logowanie');

  }
}