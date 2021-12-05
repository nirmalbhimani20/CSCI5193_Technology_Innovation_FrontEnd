import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';


@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private httpService : HttpService) { }

  instructorList(JSON : any) {
    return this.httpService.postMethod("user/instructorlist" , JSON);
  }
  checkUserIsPresent(JSON: any){
    return this.httpService.postMethod("user/checkUserIsPresent", JSON);
  }
  addQuery(JSON: any){
    return this.httpService.postMethod("user/insertQueries", JSON);
  }
  fetchQueries(JSON: any){
    return this.httpService.postMethod("instructor/fetchQueries", JSON);
  }
}
