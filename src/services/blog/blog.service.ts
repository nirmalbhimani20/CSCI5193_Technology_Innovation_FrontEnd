import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient : HttpClient) { }

  addBlog(JSON : any) {
    console.log("in add blog method");
    return this.httpClient.post<any>("https://csci5193-nodejs.herokuapp.com/v1/user/insertBlog" , JSON);

  }

  fetchBlog(JSON : any) {
    console.log("in add blog method");
    return this.httpClient.post<any>("https://csci5193-nodejs.herokuapp.com/v1/user/fetchBlog" , JSON);

  }

  updateBlog(JSON : any) {
    console.log("in update blog method");
    return this.httpClient.post<any>("https://csci5193-nodejs.herokuapp.com/v1/user/updateBlog" , JSON);

  }

  deleteBlog(JSON : any) {
    console.log("in delete blog method");
    return this.httpClient.post<any>("https://csci5193-nodejs.herokuapp.com/v1/user/deleteBlog" , JSON);

  }
}
