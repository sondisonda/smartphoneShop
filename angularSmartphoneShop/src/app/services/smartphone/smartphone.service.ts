import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { Smartphones } from 'src/app/domain/external/smartphones';

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {

  private URL = environment.urlSmartphones;

constructor(private http: HttpClient) { }

create(smartphone: Smartphones): Observable<Object> {
  return this.http.post(`${this.URL}/add`, smartphone, { responseType: 'text' });
}

 getAllSmartphones(): Observable<Smartphones[]> {
  return this.http.get<Smartphones[]>(this.URL);
}


}
