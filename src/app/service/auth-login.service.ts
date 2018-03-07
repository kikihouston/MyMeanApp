import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable } from 'rxjs';
import "rxjs/add/operator/map";
import { appConfig } from '../app.config';

@Injectable()
export class AuthLoginService {
public token: string;

  constructor(private http:HttpClient) { }
login (email: string, password: string) {
    return this.http.post<any>(url: appConfig.apiUrl + '/api/signin' body: { email: email, password: password })
  .map(user => {
    console.log('login has fired');

    console.log(user);
    let token = user.json() && user.json().token;

    if (token) {
      localStorage.setItem( key: 'currentUser', JSON.stringify(user));
    }

    console.log('usertoken is')
  })
}
}
