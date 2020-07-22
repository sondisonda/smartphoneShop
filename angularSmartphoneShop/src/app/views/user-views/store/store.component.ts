import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { SmartphoneService } from 'src/app/services/smartphone/smartphone.service';
import { Smartphones } from 'src/app/domain/external/smartphones';
import {ConfirmDialogComponent} from 'src/app/views/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  private columnsToDisplay: string[] = ['id', 'brand', 'model', 'stock', 'prize'];

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




}
