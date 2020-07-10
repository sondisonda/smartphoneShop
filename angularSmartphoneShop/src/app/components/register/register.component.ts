import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor( private formBuilder: FormBuilder, private router: Router) {
  }

  registerForm: FormGroup;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  login() {
    console.log('Logowanie');

  }
}