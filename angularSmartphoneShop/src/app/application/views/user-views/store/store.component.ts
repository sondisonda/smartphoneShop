import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { SmartphoneService } from 'src/app/application/services/smartphone/smartphone.service';
import { Smartphones } from 'src/app/application/domain/external/smartphones';
import {ConfirmDialogComponent} from 'src/app/application/views/confirm-dialog/confirm-dialog.component';
import {StoreWindowComponent} from 'src/app/application/views/user-views/store/store-window/store-window.component';
import { OrderService } from 'src/app/application/services/order/order.service';
import { Orders } from 'src/app/application/domain/external/orders';
import { NewOrderWindowComponent } from './new-order-window/new-order-window.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  private columnsToDisplay: string[] = ['id', 'brand', 'model', 'stock', 'prize', 'buy'];

  smartphones: Smartphones[];
  orders: Orders[];

  dataSource: MatTableDataSource<Smartphones>;



  emptyString = '';

  constructor(public orderService: OrderService, public smartphoneService: SmartphoneService,  public dialog: MatDialog, ) {  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.smartphoneService.getAllSmartphones().subscribe(data => {
      this.smartphones = data;
      this.dataSource = new MatTableDataSource<Smartphones>(this.smartphones);
    });
  }



buyClick(index: number) {

if (this.smartphones[index].stock > 0) {
  const dialogRef = this.dialog.open(StoreWindowComponent, {
    width: '800px',
    data: this.smartphones[index]
  });

  dialogRef.afterClosed().subscribe(smartphones => {
    if (smartphones) {
      this.smartphones[index].stock = this.smartphones[index].stock - 1;
      this.smartphoneService.updateSmartphone(smartphones).subscribe(data => {
        this.reloadData();
      });
    }
  });
} else {
console.log('No stock');
}

}


newOrderClick() {

  const dialogConfirm  = this.dialog.open(NewOrderWindowComponent, {
    width: '3000',
    data: new Orders()
  });

  dialogConfirm.afterClosed().subscribe(orders => {
    if (orders) {
      orders.id = -1;
      this.orderService.addOrder(orders).subscribe(data => {
        console.log(data);
      });
    }
  });


}


}
