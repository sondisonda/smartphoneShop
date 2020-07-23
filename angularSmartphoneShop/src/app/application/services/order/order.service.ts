import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Orders } from 'src/app/application/domain/external/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private URL = environment.urlOrders;


  constructor(private http: HttpClient) { }



  public getAllOrders(): Observable<Orders[]> {
   return this.http.get<Orders[]>(this.URL);
 }
 
 public addOrder(order: Orders): Observable<Orders> {
   return this.http.post<Orders>(this.URL , order);
 }
 
 public updateOrder(order: Orders): Observable<Orders> {
   return this.http.put<Orders>(this.URL, order);
 }
 
 
}
