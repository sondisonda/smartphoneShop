import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import {Users} from 'src/app/domain/external/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = environment.urlUsers;

constructor(private http: HttpClient) { }

create(user: Users): Observable<Object> {
  return this.http.post(`${this.URL}/add`, user, { responseType: 'text' });
}

}
