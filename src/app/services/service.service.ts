import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Horoscope } from '../components/interfaces/Horoscope';
import { User } from '../components/interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private readonly APIURL = "http://localhost:8080/users"
  private readonly APIHOROSCOPO = "https://sameer-kumar-aztro-v1.p.rapidapi.com/"

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.APIURL+"/", user)
  }

  login(user: User): Observable<boolean>{
    return this.http.post<boolean>(this.APIURL+"/"+user.name, user)
  }

  dataHoroscope(signo: string): Observable<Horoscope>{
    return this.http.post<Horoscope>(this.APIHOROSCOPO+"?sign="+signo+"&day=today", "", {headers: {
      'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '663eb91451msh3db67067f812aa3p139a3djsn0346e2540b58'
    }})
  }

}
