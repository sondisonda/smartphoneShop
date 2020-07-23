import {Component, Inject, OnInit, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from 'src/app/application/services/order/order.service';
import {Orders} from 'src/app/application/domain/external/orders';

@Component({
  selector: 'app-new-order-window',
  templateUrl: './new-order-window.component.html',
  styleUrls: ['./new-order-window.component.css']
})
export class NewOrderWindowComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewOrderWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public order: Orders,
    private orderService: OrderService) {}

cancelClick() {
this.dialogRef.close();
}

  ngOnInit() {
  }

}
