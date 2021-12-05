import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmitvalueService } from 'src/services/emit/emitvalue.service';
import { InstructorService } from 'src/services/instructor/instructor.service';
import { NotificationService } from 'src/services/notification/notification.service';

@Component({
  selector: 'app-usersection',
  templateUrl: './usersection.component.html',
  styleUrls: ['./usersection.component.css']
})
export class UsersectionComponent implements OnInit {

  constructor(private router : Router, private emitValue : EmitvalueService, private notificationService : NotificationService, private instructorService : InstructorService) { }

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
  }

}
