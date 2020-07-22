import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { SmartphoneService } from 'src/app/services/smartphone/smartphone.service';
import { Smartphones } from 'src/app/domain/external/smartphones';
import { SmartphoneWindowComponent } from './smartphone-window/smartphone-window.component';
import {ConfirmDialogComponent} from 'src/app/views/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-smartphone-list',
  templateUrl: './smartphone-list.component.html',
  styleUrls: ['./smartphone-list.component.css']
})
export class SmartphoneListComponent implements OnInit {


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

  editButtonClick(index: number) {
    const dialogRef = this.dialog.open(SmartphoneWindowComponent, {
      width: '800px',
      data: this.smartphones[index]
    });

    dialogRef.afterClosed().subscribe(smartphones => {
      if (smartphones) {
        this.smartphoneService.updateSmartphone(smartphones).subscribe(data => {
          this.reloadData();
        });
      }
    });
  }


  eraseButtonClick(id: number) {
    const dialogConfirm  = this.dialog.open(ConfirmDialogComponent, {
      width: '3000',
      data: this.smartphones[id].model
    });

    dialogConfirm.afterClosed().subscribe(confirm => {
      if (confirm) {
        this.smartphoneService.deleteSmartphone(this.smartphones[id]).subscribe(info => {
          console.log(info);
          this.reloadData();
        });
      }
    });
  }


}
