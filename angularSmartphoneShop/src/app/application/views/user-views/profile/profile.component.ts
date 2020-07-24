import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
//  Formatowanie na 4 taby ;)!!!
export class ProfileComponent implements OnInit {


 
  private _userName = '';
  private _password = '';
  private _firstName = '';
  private _lastName = '';


  private profileForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }


  ngOnInit() {

  }


  createForm() {
    this.profileForm = this.formBuilder.group({
      _userName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12), Validators.pattern('[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)')]],
      _password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12), Validators.pattern('[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)')]],
      _firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12), Validators.pattern('[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)')]],
      _lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12), Validators.pattern('[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)')]],
    });
  }



  get f() {
    return this.profileForm.controls;
  }

  login() {
    console.log('Logowanie');

  }
}