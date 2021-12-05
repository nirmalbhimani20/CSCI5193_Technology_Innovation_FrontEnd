import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient : HttpClient) { }

   //Url : string  = "http://localhost:3000/v1/";
   Url : string = "https://csci5193-nodejs.herokuapp.com/v1/";

   postMethod( URL : string,JSON : string){
   
    return this.httpClient.post<any>( this.Url + URL , JSON);
   }

   getMethod( URL : string){
    return this.httpClient.get<any>( this.Url + URL);
   }

   putMethod(URL: string , JSON: string){
     return this.httpClient.put<any>( this.Url + URL , JSON);
   }

   deleteMethod(URL: string ){
    return this.httpClient.delete<any>( this.Url + URL);
  }



}
