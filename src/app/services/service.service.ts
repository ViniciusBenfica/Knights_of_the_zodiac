import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../components/interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private readonly APIURL = "http://localhost:8080/users"

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.APIURL+"/", user)
  }

  login(user: User): Observable<boolean>{
    return this.http.post<boolean>(this.APIURL+"/"+user.name, user)
  }

}
