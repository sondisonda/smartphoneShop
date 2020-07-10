import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor( private formBuilder: FormBuilder, private router: Router) {
  }

  profileForm: FormGroup;

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  get f() {
    return this.profileForm.controls;
  }

  login() {
    console.log('Logowanie');

  }
}