import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmitvalueService } from 'src/services/emit/emitvalue.service';
import { NotificationService } from 'src/services/notification/notification.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private router : Router, private emitValue : EmitvalueService, private notificationService : NotificationService) { }

  ngOnInit(): void {
    var role=  localStorage.getItem("role");
    var userlogin =  localStorage.getItem("userLogin");
    var id  = localStorage.getItem("id");

   
    if(role == 'user' || role == 'instructor'){
   
        this.router.navigate(['/task']);
        this.emitValue.roleEmit(role);
        this.emitValue.userLogin("true");
      
    }
    else {
      this.router.navigate(['/home']);
      localStorage.clear();
    }

  }

}
