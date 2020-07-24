import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from 'src/app/application/domain/external/users';
import { LoginBody } from 'src/app/application/domain/external/login-body';


@Injectable({
  providedIn: 'root'
})
//  formatowanie
export class UserService {

  private URL = environment.urlUsers;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.URL);
  }

  public addUser(user: Users): Observable<Users> {
    return this.http.post<Users>(this.URL, user);
  }

  public deleteUser(user: Users): Observable<any> {
    return this.http.delete(this.URL + '/' + user.id, { responseType: 'text' });
  }
  public updateUser(user: Users): Observable<Users> {
    return this.http.put<Users>(this.URL, user);
  }

  loginUser(username: string, password: string): Observable<any> {
    const body = new LoginBody(username, password);
    return this.http.post<UserService>(this.URL + '/' + 'login', body);
  }




}
