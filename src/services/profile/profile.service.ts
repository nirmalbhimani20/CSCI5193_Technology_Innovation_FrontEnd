import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient : HttpClient) { }

  getProfile(id: number) {
    console.log("in instructor list method");
    return this.httpClient.get<any>("http://localhost:3000/v1/user/profile", {params: {id: id}});
  }

  updateProfile(id: number, name: string, email: string, about: string) {
    console.log("in instructor list method");
    return this.httpClient.post<any>("http://localhost:3000/v1/user/profile", {id: id, name: name, email: email, about: about});
  }
}
