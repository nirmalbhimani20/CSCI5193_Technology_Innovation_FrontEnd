import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpService : HttpService) { }

  addBlog(JSON : any) {
    console.log("in add blog method");
    return this.httpService.postMethod("instructor/insertBlog" , JSON);
  }

  fetchBlog(JSON : any) {
    console.log("in add blog method");
    return this.httpService.postMethod("instructor/fetchBlog" , JSON);
  }

  updateBlog(id: string,JSON : any) {
    console.log("in update blog method");
    return this.httpService.putMethod("instructor/updateBlog" + "/" + id , JSON);
  }

  deleteBlog(id: string) {
    console.log("in delete blog method");
    return this.httpService.deleteMethod("instructor/deleteBlog" + "/" + id );
  }
}
