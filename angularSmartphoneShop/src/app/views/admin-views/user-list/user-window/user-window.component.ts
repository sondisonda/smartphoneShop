import {Component, Inject, OnInit, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import {Users} from 'src/app/domain/external/users';

@Component({
  selector: 'app-user-window',
  templateUrl: './user-window.component.html',
  styleUrls: ['./user-window.component.css']
})
export class UserWindowComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public user: Users,
    private userService: UserService) {}

cancelClick() {
this.dialogRef.close();
}

  ngOnInit() {
  }

}
