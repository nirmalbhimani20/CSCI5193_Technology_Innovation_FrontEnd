import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/services/login/login.service';
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

  constructor(private router : Router, private toster : ToastrService , private registerService : RegisterService, private loginService : LoginService) { }

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
      var JSON = {
        email : this.lEmail,
        password : this.lPassword
      }

    this.loginService.login(JSON).subscribe((res) => {
      console.log(res);
      if(res.status == "True" || res.status =="true"){
        console.log("login");
        this.router.navigate(['/dashboard']);

      }
      else {
        this.toster.error("Try Again After Some Time" , "Error");
      }
    })


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

       var JSON1 = {
         fullName : this.rFullName,
         email : this.rEmail,
         password : this.rPassword
       }

       this.registerService.register(JSON1).subscribe((res) => {
         console.log(" resonce got"+   JSON.stringify(res));
        if(res.status == "True" || res.status == "true"){
          console.log("hii");
          this.toster.success("Sign Up successfully", "Sucess");
        }
        else {
          this.toster.error("Try Again After Some Time" , "Error");
        }

       })
       
       

    }
  }

}
