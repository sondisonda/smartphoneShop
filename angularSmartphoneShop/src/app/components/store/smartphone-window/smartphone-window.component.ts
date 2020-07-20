import {Component, Inject, OnInit, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SmartphoneService } from 'src/app/services/smartphone/smartphone.service';
import {Smartphones} from 'src/app/domain/external/smartphones';

@Component({
  selector: 'app-smartphone-window',
  templateUrl: './smartphone-window.component.html',
  styleUrls: ['./smartphone-window.component.css']
})
export class SmartphoneWindowComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SmartphoneWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public smartphone: Smartphones,
    private smartphoneService: SmartphoneService) {}

cancelClick() {
this.dialogRef.close();
}

  ngOnInit() {
  }

}
