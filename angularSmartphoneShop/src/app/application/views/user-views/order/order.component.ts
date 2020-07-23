import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import {ConfirmDialogComponent} from 'src/app/application/views/confirm-dialog/confirm-dialog.component';
import { Orders } from 'src/app/application/domain/external/orders';
import { OrderService } from 'src/app/application/services/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


  private columnsToDisplay: string[] = ['id', 'value' , 'edit'];

  orders: Orders[];

  dataSource: MatTableDataSource<Orders>;



  emptyString = '';

  constructor(public orderService: OrderService,  public dialog: MatDialog, ) {  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.orderService.getAllOrders().subscribe(data => {
      this.orders = data;
      this.dataSource = new MatTableDataSource<Orders>(this.orders);
    });
  }







}
