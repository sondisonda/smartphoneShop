import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { SmartphoneService } from 'src/app/services/smartphone/smartphone.service';
import { Smartphones } from 'src/app/domain/external/smartphones';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {


  private columnsToDisplay: string[] = ['id', 'brand', 'model', 'stock', 'prize'];

  // Lista produktów
  smartphones: Smartphones[];

  dataSource: MatTableDataSource<Smartphones>;



  emptyString = '';
 

  // Wstrzyknięcie serwisu produktów do pobrania ich z bazy oraz dialogu aby edytować rekordy (jeszcze nie działa)
  constructor(public productService: SmartphoneService ) {  }

  ngOnInit() {
    this.reloadData();
  }

  // Wczytanie rekordów z bazy i aktualizacja paginatora oraz filtra
  reloadData() {
    this.productService.getAllSmartphones().subscribe(data => {
      this.smartphones = data;
      this.dataSource = new MatTableDataSource<Smartphones>(this.smartphones);
   
 
    });
  }










}
