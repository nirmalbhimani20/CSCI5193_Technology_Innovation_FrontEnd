import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private httpClient : HttpClient) { }

  instructorList() {
    console.log("in instructor list method");
    return this.httpClient.get<any>("http://localhost:3000/v1/user/instructorlist" );
  }
  checkUserIsPresent(JSON: any){
    return this.httpClient.post<any>("http://localhost:3000/v1/user/checkUserIsPresent" , JSON);
  }
  addQuery(JSON: any){
    return this.httpClient.post<any>("http://localhost:3000/v1/user/insertQueries" , JSON);
  }
  fetchQueries(JSON: any){
    return this.httpClient.post<any>("http://localhost:3000/v1/user/fetchQueries" , JSON);
  }
}
