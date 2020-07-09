import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    username: ['' ],
    password: [''],
     });


  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
  }



 

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registerForm.value);
  }
}