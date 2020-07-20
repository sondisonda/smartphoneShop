import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Users} from 'src/app/domain/external/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = environment.urlUsers;

constructor(private http: HttpClient) { }

getAllUsers(): Observable<Users[]> {
  return this.http.get<Users[]>(this.URL);
}

}
