import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient : HttpClient){

  }

  register(JSON : any) {
    console.log("in register method");
    return this.httpClient.post<any>("http://localhost:3000/v1/user/register" , JSON);
  }

}

// /Users/lib-user/csci5193/src/app