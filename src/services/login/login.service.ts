import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  login(JSON : any) {
    console.log("in login method");
    return this.httpClient.post<any>("http://localhost:3000/v1/user/login" , JSON);
  }
}
