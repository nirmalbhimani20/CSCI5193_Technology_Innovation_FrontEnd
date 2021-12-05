import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmitvalueService } from 'src/services/emit/emitvalue.service';
import { InstructorService } from 'src/services/instructor/instructor.service';
import { NotificationService } from 'src/services/notification/notification.service';

@Component({
  selector: 'app-contact-instructor',
  templateUrl: './contact-instructor.component.html',
  styleUrls: ['./contact-instructor.component.css']
})
export class ContactInstructorComponent implements OnInit {
  
  instructorList : any ;
  uMessage : any;
  uSubject : any;
  uEmail : any;
  uName : any;
  uIName : any;


  constructor(private instructorListservice : InstructorService, private notificationService : NotificationService, private router : Router, private emitValue : EmitvalueService) { }

  ngOnInit(): void {
    var role=  localStorage.getItem("role");
    var userlogin =  localStorage.getItem("userLogin");
    var id  = localStorage.getItem("id");

   
    if(role == 'user' || role == 'instructor'){
   
        this.router.navigate(['/contact']);
        this.emitValue.roleEmit(role);
        this.emitValue.userLogin("true");

        var JSONdata = {
          id : localStorage.getItem("id")
        }

       this.instructorListservice.instructorList(JSONdata).subscribe((res) => {
          if(res.status == "true" || res.status == "True"){
            this.instructorList = res.result;
          }
       })
    }
    else {
      this.router.navigate(['/home']);
      localStorage.clear();
    }
  }

  sendMessage(){
    console.log("Send Message")
    
    if(this.uName == null || this.uName == "" || this.uName == undefined){
      this.notificationService.showError("Please insert Name", "Error");
    }
    else if(this.uIName == null || this.uIName == "" || this.uIName == undefined){
      this.notificationService.showError("Please Select Instructor", "Error");
    }
    else if(this.uSubject == null || this.uSubject == "" || this.uSubject == undefined){
      this.notificationService.showError("Please insert Subject", "Error");
    }
    else if(this.uMessage == null || this.uMessage == "" || this.uMessage == undefined){
      this.notificationService.showError("Please insert Message", "Error");
    }
    else {
          var JsonData1 = {
            instructor : this.uIName,
            name : this.uName,
            subject : this.uSubject,
            message : this.uMessage,
            id : localStorage.getItem("id")

          }
          this.instructorListservice.addQuery(JsonData1).subscribe(data => {
            if(data.status == true || data.status == "true"){
              console.log(" your query placed successfully");
              this.notificationService.showSuccess("Instructor will contact you soon", "Success");
            }
            else {
            
              this.notificationService.showError("Try Again after some time", "error");
            }
          })
        }
        
      
    

  }

}
