import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


 
  private userName = '';
  private password = '';
  private firstName = '';
  private lastName = '';


  private registerForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }


  ngOnInit() {
 
  }


  createForm() {
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12), Validators.pattern('[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)')]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12), Validators.pattern('[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)')]],
      firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12), Validators.pattern('[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)')]],
      lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12), Validators.pattern('[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)')]],
    });
  }



  get f() {
    return this.registerForm.controls;
  }

  login() {
    console.log('Logowanie');

  }
}