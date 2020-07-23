import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { SmartphoneService } from 'src/app/services/smartphone/smartphone.service';
import { Smartphones } from 'src/app/domain/external/smartphones';
import {ConfirmDialogComponent} from 'src/app/views/confirm-dialog/confirm-dialog.component';
import {StoreWindowComponent} from 'src/app/views/user-views/store/store-window/store-window.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  private columnsToDisplay: string[] = ['id', 'brand', 'model', 'stock', 'prize', 'buy'];

  smartphones: Smartphones[];

  dataSource: MatTableDataSource<Smartphones>;



  emptyString = '';

  constructor(public smartphoneService: SmartphoneService,  public dialog: MatDialog, ) {  }

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





}
