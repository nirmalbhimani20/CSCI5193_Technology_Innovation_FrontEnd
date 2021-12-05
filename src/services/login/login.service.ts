import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService : HttpService) { }

  login(JSON : any) {
    console.log("in login method");
    return this.httpService.postMethod("user/login" , JSON);
  }
}
