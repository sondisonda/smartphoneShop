import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { Orders } from 'src/app/application/domain/external/orders';
import { OrderService } from 'src/app/application/services/order/order.service';
import { OrderWindowComponent } from './order-window/order-window.component';

@Component({
  selector: 'app-order-list-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
// 
export class OrderListComponent implements OnInit {


  private columnsToDisplay: string[] = ['id', 'value', 'edit'];

  orders: Orders[];

  dataSource: MatTableDataSource<Orders>;

  constructor(public orderService: OrderService, public dialog: MatDialog,) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.orderService.getAllOrders().subscribe(data => {
      this.orders = data;
      this.dataSource = new MatTableDataSource<Orders>(this.orders);
    });
  }


  addButtonClick() {
    const dialogRef = this.dialog.open(OrderWindowComponent, {
      width: '800px',
      data: new Orders()
    });

    dialogRef.afterClosed().subscribe(orders => {
      if (orders) {
        orders.id = -1;
        this.orderService.addOrder(orders).subscribe(data => {
          console.log(data);
          this.reloadData();
        });
      }
    });
  }

  editButtonClick(index: number) {
    const dialogRef = this.dialog.open(OrderWindowComponent, {
      width: '800px',
      data: this.orders[index]
    });

    dialogRef.afterClosed().subscribe(orders => {
      if (orders) {
        this.orderService.updateOrder(orders).subscribe(data => {
          this.reloadData();
        });
      }
    });
  }


}
