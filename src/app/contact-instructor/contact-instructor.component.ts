import { Component, OnInit } from '@angular/core';
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


  constructor(private instructorListservice : InstructorService, private notificationService : NotificationService) { }

  ngOnInit(): void {
    this.instructorListservice.instructorList().subscribe((data) => {
      console.log("data" +JSON.stringify(data));

      this.instructorList = data.result;
      console.log("---"+this.instructorList);
    })
  }

  sendMessage(){
    console.log("Send Message")
    
    if(this.uName == null || this.uName == "" || this.uName == undefined){
      this.notificationService.showError("Please insert Name", "Error");
    }
    else if(this.uEmail == null || this.uEmail == "" || this.uEmail == undefined){
      this.notificationService.showError("Please insert Email", "Error");
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
      var JsonData = {
        email : this.uEmail
      }
      this.instructorListservice.checkUserIsPresent(JsonData).subscribe(data => {
        console.log("==data"+JSON.stringify(data))
        if(data.result > 0){
          console.log(" user is present");
          var JsonData1 = {
            email : this.uEmail,
            instructor : this.uIName,
            name : this.uName,
            subject : this.uSubject,
            message : this.uMessage,
            id : data.id

          }
          this.instructorListservice.addQuery(JsonData1).subscribe(data => {
            if(data.status == true || data.status == "true"){
              console.log(" your query placed successfully");
              this.notificationService.showSuccess("Instructor will contact you soon", "Success");
            }
            else {
              // console.log(" Try again after some time");
              this.notificationService.showError("Try Again after some time", "error");
            }
          })
        }
        else {

          this.notificationService.showError("Please register your email address first", "error");
          console.log(" user is not present");
        }
      })
    }

  }

}
