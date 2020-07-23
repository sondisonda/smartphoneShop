import {Component, Inject, OnInit, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SmartphoneService } from 'src/app/services/smartphone/smartphone.service';
import {Smartphones} from 'src/app/domain/external/smartphones';

@Component({
  selector: 'app-store-window',
  templateUrl: './store-window.component.html',
  styleUrls: ['./store-window.component.css']
})
export class StoreWindowComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StoreWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public smartphone: Smartphones,
    private smartphoneService: SmartphoneService) {}

cancelClick() {
this.dialogRef.close();
}

  ngOnInit() {
  }

}
