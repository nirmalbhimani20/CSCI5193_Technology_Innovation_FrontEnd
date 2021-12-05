import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpService : HttpService){

  }

  register(JSONdata : any) {
    console.log("in register method service file");
    return this.httpService.postMethod("user/register", JSONdata);
  }

}