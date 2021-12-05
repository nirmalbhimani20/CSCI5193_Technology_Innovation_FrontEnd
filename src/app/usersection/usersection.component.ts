import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmitvalueService } from 'src/services/emit/emitvalue.service';
import { NotificationService } from 'src/services/notification/notification.service';
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-usersection',
  templateUrl: './usersection.component.html',
  styleUrls: ['./usersection.component.css']
})
export class UsersectionComponent implements OnInit {

  fullName: any;
  emailAddress : any;
  problem : any;
  height : any;
  weight : any;
  birthDate : any;
  instrutorUserId : any;
  selectedIndex : any;

  userDetail : any;

  constructor(private router : Router, private emitValue : EmitvalueService, private notificationService : NotificationService,private userService : UserService) { }

  ngOnInit(): void {
    var role=  localStorage.getItem("role");
    var userlogin =  localStorage.getItem("userLogin");
    var id  = localStorage.getItem("id");

   
    if(role == 'user' || role == 'instructor'){
   
        this.router.navigate(['/userSection']);
        this.emitValue.roleEmit(role);
        this.emitValue.userLogin("true");
      
    }
    else {
      this.router.navigate(['/home']);
      localStorage.clear();
    }

    var JsonData2 = {
      id : localStorage.getItem("id")
    } 

    this.userService.fetchUser(JsonData2).subscribe((data) => {
      if(data.status == "True" || data.status =="true"){
        console.log(data.data);
        this.userDetail = data.data;
      }
    })

  }

  cancelAction(){
    
    this.fullName = "";
    this.emailAddress = "";
    this.problem = "";
    this.height = "";
    this.weight = "";
    this.birthDate = "";

    this.selectedIndex = "";
  }

  adduser(){
    if(this.fullName == null || this.fullName == "" || this.fullName == undefined){
      this.notificationService.showError("Please insert Full Name", "Error");
    }
    else if(this.emailAddress == null || this.emailAddress == "" ||  this.emailAddress == undefined){
      this.notificationService.showError("Please insert Email Address", "Error");
    }
    else if(this.problem == null || this.problem == "" || this.problem == undefined){
      this.notificationService.showError("Please insert Problem", "Error");
    }
    else if(this.height == null || this.height == "" ||  this.height == undefined){
      this.notificationService.showError("Please insert Height", "Error");
    }
    else if(this.weight == null || this.weight == "" || this.weight == undefined){
      this.notificationService.showError("Please insert Weight", "Error");
    }
    else if(this.birthDate == null || this.birthDate == "" || this.birthDate == undefined){
      this.notificationService.showError("Please insert Birth Date", "Error");
    }
    else {
      var Jsondata1= {
        fullName : this.fullName,
        emailAddress : this.emailAddress,
        problem : this.problem,
        height : this.height,
        weight : this.weight,
        birthdate : this.birthDate,
        id : localStorage.getItem("id")
      }

      this.userService.addUser(Jsondata1).subscribe((data) => {
        if(data.status == "True" || data.status =="true"){
          this.notificationService.showSuccess("User Added Successfully", "Success");
          this.userDetail.push(data.data[0]);
          this.cancelAction();
        }
        else if(data.number == "211"){
          console.log("------");
          this.notificationService.showError("Tell User to register in the Website", "Error");
         
        }
        else {
          this.notificationService.showError("", "Error");
          this.cancelAction();
        }
      })

    }
  }

  getindex (id : any, index : any){

    this.fullName = this.userDetail[index].fullName;
    this.emailAddress =  this.userDetail[index].emailAddress;
    this.problem =  this.userDetail[index].problem;
    this.height =  this.userDetail[index].height;
    this.weight =  this.userDetail[index].weight;
    this.birthDate = this.userDetail[index].birthDate;

    this.selectedIndex = index;
    this.instrutorUserId = id;

  }

  updateBlog() {
    if(this.fullName == null || this.fullName == "" || this.fullName == undefined){
      this.notificationService.showError("Please insert Full Name", "Error");
    }
    else if(this.emailAddress == null || this.emailAddress == "" ||  this.emailAddress == undefined){
      this.notificationService.showError("Please insert Email Address", "Error");
    }
    else if(this.problem == null || this.problem == "" || this.problem == undefined){
      this.notificationService.showError("Please insert Problem", "Error");
    }
    else if(this.height == null || this.height == "" ||  this.height == undefined){
      this.notificationService.showError("Please insert Height", "Error");
    }
    else if(this.weight == null || this.weight == "" || this.weight == undefined){
      this.notificationService.showError("Please insert Weight", "Error");
    }
    else if(this.birthDate == null || this.birthDate == "" || this.birthDate == undefined){
      this.notificationService.showError("Please insert Birth Date", "Error");
    }
    else {
      var Jsondata1= {
        fullName : this.fullName,
        emailAddress : this.emailAddress,
        problem : this.problem,
        height : this.height,
        weight : this.weight,
        birthdate : this.birthDate,
        id : localStorage.getItem("id")
      }

      this.userService.updateUser(this.instrutorUserId, Jsondata1).subscribe((data) => {
        if(data.status == "True" || data.status =="true"){
          this.notificationService.showSuccess("User Updated Successfully", "Success");
          this.userDetail.splice(this.selectedIndex , 1 , data.data[0]);
          this.cancelAction();
        }
        else {
          this.notificationService.showError("Try Again After Some time", "Error");
          this.cancelAction();
        }
      })

    }
  }

  deleteBlog (){
    
    this.userService.deleteBlog(this.instrutorUserId).subscribe((res) => {
      if (res.status == "True" || res.status == "true") {
        this.userDetail.splice(this.selectedIndex, 1);
        this.cancelAction();
        console.log("successfully deleted");
        this.notificationService.showSuccess("Succcessfully Deleted", "Success");


      }
      else {
        this.cancelAction();
        console.log("error in updation", res);

        this.notificationService.showError(res, "Error");

      }
    })
  }

}
