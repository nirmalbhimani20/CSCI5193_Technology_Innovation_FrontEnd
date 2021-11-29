import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitvalueService {

  constructor() { }

  $isUserLogin = new EventEmitter();
  $userRole= new EventEmitter();

  userLogin(value : any){
    this.$isUserLogin.emit(value);
  }

  roleEmit(value: any){
    this.$userRole.emit(value);
  }
}
