import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  rFullName: string | undefined ;
  rEmail: string | undefined;
  rPassword: string | undefined;

  lEmail: string | undefined ;
  lPassword: string  | undefined;

  constructor(private toster : ToastrService , private registerService : RegisterService) { }

  ngOnInit(): void {
  }

  login(){
    if(this.lEmail == null || this.lEmail == "" || this.lEmail == undefined){
      this.toster.error("Please insert Email", "Error");
    }
    else if(this.lPassword == null || this.lPassword == "" || this.lPassword == undefined){
      this.toster.error("Please insert Password", "Error");
    }
    else {

    }

  }

  register(){

    if(this.rFullName == null || this.rFullName == "" || this.rFullName == undefined){
      this.toster.error("Please insert Full Name", "Error");
    }
    else if(this.rPassword == null || this.rPassword == "" || this.rPassword == undefined){
      this.toster.error("Please insert Password", "Error");
    }
    else if(this.rEmail == null || this.rEmail == "" || this.rEmail == undefined){
      this.toster.error("Please insert Email", "Error");
    }
    else {

       var JSON = {
         fullName : this.rFullName,
         email : this.rEmail,
         password : this.rPassword
       }

       this.registerService.register(JSON).subscribe((res) => {
         console.log(" resonce got");
       })
       
       

    }
  }

}
