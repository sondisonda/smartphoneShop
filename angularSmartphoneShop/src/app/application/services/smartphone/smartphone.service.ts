import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Smartphones } from 'src/app/application/domain/external/smartphones';




@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {

  private URL = environment.urlSmartphones;



constructor(private http: HttpClient) { }



 getAllSmartphones(): Observable<Smartphones[]> {
  return this.http.get<Smartphones[]>(this.URL);
}


public addSmartphone(smartphone: Smartphones): Observable<Smartphones> {
  return this.http.post<Smartphones>(this.URL , smartphone);
}

public deleteSmartphone(smartphone: Smartphones): Observable<any> {
  return this.http.delete(this.URL + '/' + smartphone.id, {responseType: 'text'});
}
public updateSmartphone(smartphone: Smartphones): Observable<Smartphones> {
  return this.http.put<Smartphones>(this.URL, smartphone);
}






}
