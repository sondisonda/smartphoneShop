import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit{
  profileForm = this.fb.group({
    userName: ['' ],
    password: [''],
    firstName: [''],
    lastName: ['']

  });


  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}