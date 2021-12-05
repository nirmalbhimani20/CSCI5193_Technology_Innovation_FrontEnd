import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmitvalueService } from 'src/services/emit/emitvalue.service';
import { LoginService } from 'src/services/login/login.service';
import { NotificationService } from 'src/services/notification/notification.service';
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
  rcPassword: string | undefined;
  rRole: any = "";

  lEmail: string | undefined ;
  lPassword: string  | undefined;

  constructor(private router : Router,private notificationService : NotificationService, private toster : ToastrService , private notification : NotificationService, private registerService : RegisterService, private loginService : LoginService,  private emitValue : EmitvalueService) { }

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
        console.log("login" );

        this.emitValue.roleEmit(res.result.role);
        this.emitValue.userLogin("true");
        this.router.navigate(['/home']);
        this.notification.showSuccess("Login Successfully" , "Success");
        
        console.log("-- role"+res.result.role);
        localStorage.setItem("id",res.result.id );
        localStorage.setItem("role",res.result.role);
        localStorage.setItem("userLogin", "true");
      }
      else {
        this.notificationService.showError("Invalid Credentials", "Error");
      }
    })


    }

  }

  register(){
    console.log("in register method")
    console.log("--- "+this.rRole);
    if(this.rFullName == null || this.rFullName == "" || this.rFullName == undefined){
      this.toster.error("Please insert Full Name", "Error");
    }
    else if(this.rPassword == null || this.rPassword == "" || this.rPassword == undefined){
      this.toster.error("Please insert Password", "Error");
    }
    else if(this.rEmail == null || this.rEmail == "" || this.rEmail == undefined){
      this.toster.error("Please insert Email", "Error");
    }
    else if (this.rPassword != this.rcPassword){
      this.toster.error("Password is not same", "Error");
    }
    else if (this.rRole != 'user' && this.rRole != "instructor"){
      this.toster.error("Please Select Your role", "Error");
    }
    else {

       var JSONdata = {
         fullName : this.rFullName,
         email : this.rEmail,
         password : this.rPassword,
         role: this.rRole
       }
       console.log("_-__")
       this.registerService.register(JSONdata).subscribe((res) => {
         console.log(" resonce got"+   JSON.stringify(res));
        if(res.status == "True" || res.status == "true"){
          console.log("hii");
          this.toster.success("Sign Up successfully", "Sucess");
        }
        else {
          if(res.number == "105"){
            this.notificationService.showError("Email Address is already Present", "Error");
          }
          else {
            this.notificationService.showError("Try Again After Some time", "Error");
          }
        }

       })
       
       

    }
  }

  cancelAction(){
    this.rRole = "";
    this.rEmail = "";
    this.rPassword = "";
    this.rFullName = "";
    this.rcPassword = "";
  }

}
