import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';

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


  user = { userName: '', password: '', firstName: '', lastName: '' };



  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      'userName': new FormControl(this.user.userName, [
        Validators.required,
        Validators.minLength(4),
      ]),
    }); // <-- add custom validator at the FormGroup level
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