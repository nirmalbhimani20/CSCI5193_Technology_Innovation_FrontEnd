import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService : HttpService) { }

  addUser(JSON : any) {
    console.log("in add User method");
    return this.httpService.postMethod("instructor/insertUser" , JSON);
  }

  fetchUser(JSON : any) {
    console.log("in add blog method");
    return this.httpService.postMethod("instructor/fetchUser" , JSON);
  }

  updateUser(id: string,JSON : any) {
    console.log("in update blog method");
    return this.httpService.putMethod("instructor/updateUser" + "/" + id , JSON);
  }

  deleteBlog(id: string) {
    console.log("in delete blog method");
    return this.httpService.deleteMethod("instructor/deleteBlog" + "/" + id );
  }
}
