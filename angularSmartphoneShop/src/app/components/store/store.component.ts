import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { SmartphoneService } from 'src/app/services/smartphone/smartphone.service';
import { Smartphones } from 'src/app/domain/external/smartphones';
import { SmartphoneWindowComponent } from './smartphone-window/smartphone-window.component';
import {ConfirmDialogComponent} from 'src/app/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {


  private columnsToDisplay: string[] = ['id', 'brand', 'model', 'stock', 'prize', 'edit', 'delete'];

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

  editButtonClick(index: number) {
    const dialogRef = this.dialog.open(SmartphoneWindowComponent, {
      width: '800px',
      data: this.smartphones[index]
    });
  }

  addButtonClick() {
    const dialogRef = this.dialog.open(SmartphoneWindowComponent, {
      width: '800px',
      data: new Smartphones()
    });

    dialogRef.afterClosed().subscribe(smartphones => {
      if (smartphones) {
        smartphones.id = -1;
        this.smartphoneService.addSmartphone(smartphones).subscribe(data => {
          console.log(data);
          this.reloadData();
        });
      }
    });
  }

  deleteButtonClick(index: number) {
    const dialogConfirm = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: this.smartphones[index].model
    });

    dialogConfirm.afterClosed().subscribe(confirm => {
      if (confirm) {
        this.smartphoneService.deleteSmartphone(this.smartphones[index]).subscribe(info => {
          console.log(info);
          this.reloadData();
        });
      }
    });
  }


}
