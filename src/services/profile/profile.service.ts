import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient : HttpClient) { }

  getProfile(id: number) {
    return this.httpClient.get<any>("https://csci5193-nodejs.herokuapp.com/v1/user/profile", {params: {id: id}});
  }

  updateProfile(id: number, name: string, email: string, about: string) {
    return this.httpClient.post<any>("https://csci5193-nodejs.herokuapp.com/v1/user/profile", {id: id, name: name, email: email, about: about});
  }
}
