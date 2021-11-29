import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/services/blog/blog.service';
import { EmitvalueService } from 'src/services/emit/emitvalue.service';
import { InstructorService } from 'src/services/instructor/instructor.service';
import { NotificationService } from 'src/services/notification/notification.service';

@Component({
  selector: 'app-instructorblog',
  templateUrl: './instructorblog.component.html',
  styleUrls: ['./instructorblog.component.css']
})
export class InstructorblogComponent implements OnInit {
  
  blogTitle : any;
  blogShortDescription : any;
  blogDescription : any;
  blogsDetail : any;
  blogid : any;
  selectedIndex : any;


  constructor(private router : Router, private emitValue : EmitvalueService, private notificationService : NotificationService, private instructorService : InstructorService, private blogService : BlogService) { }

  ngOnInit(): void {
    var role=  localStorage.getItem("role");
    var userlogin =  localStorage.getItem("userLogin");
    var id  = localStorage.getItem("id");

   
    if(role == 'user' || role == 'instructor'){
   
        this.router.navigate(['/instructorBlog']);
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

    this.blogService.fetchBlog(JsonData2).subscribe((data) => {
      if(data.status == "True" || data.status =="true"){
        console.log(data.data);
        this.blogsDetail = data.data;
      }
    })

  }

  cancelAction(){
    this.blogDescription = "";
    this.blogShortDescription = "";
    this.blogTitle = "";
    this.blogid = "";
    this.selectedIndex = "";
  }

  addBlog(){
    if(this.blogTitle == null || this.blogTitle == "" || this.blogTitle == undefined){
      this.notificationService.showError("Please insert Blog Title", "Error");
    }
    else if(this.blogShortDescription == null || this.blogShortDescription == "" ||  this.blogShortDescription == undefined){
      this.notificationService.showError("Please insert Blog Short Decription", "Error");
    }
    else if(this.blogDescription == null || this.blogDescription == "" || this.blogShortDescription == undefined){
      this.notificationService.showError("Please insert Blog Description", "Error");
    }
    else {
      var Jsondata1= {
        title : this.blogTitle,
        shortDescription : this.blogShortDescription,
        description : this.blogDescription,
        id : localStorage.getItem("id")
      }

      this.blogService.addBlog(Jsondata1).subscribe((data) => {
        if(data.status == "True" || data.status =="true"){
          this.notificationService.showSuccess("Blog Added Successfully", "Success");
          this.blogsDetail.push(data.data[0]);
          this.cancelAction();
        }
        else {
          this.notificationService.showError("Try Again After Some time", "Error");
          this.cancelAction();
        }
      })

    }
  }

  getindex (id : any, index : any){

    this.blogTitle = this.blogsDetail[index].blogTitle;
    this.blogShortDescription =  this.blogsDetail[index].blogShortDescription;
    this.blogDescription =  this.blogsDetail[index].blogDescription;
    this.selectedIndex = index;
    this.blogid = id;

  }

  updateBlog() {
    if(this.blogTitle == null || this.blogTitle == "" || this.blogTitle == undefined){
      this.notificationService.showError("Please insert Blog Title", "Error");
    }
    else if(this.blogShortDescription == null || this.blogShortDescription == "" ||  this.blogShortDescription == undefined){
      this.notificationService.showError("Please insert Blog Short Decription", "Error");
    }
    else if(this.blogDescription == null || this.blogDescription == "" || this.blogShortDescription == undefined){
      this.notificationService.showError("Please insert Blog Description", "Error");
    }
    else {
      var Jsondata1= {
        title : this.blogTitle,
        shortDescription : this.blogShortDescription,
        description : this.blogDescription,
        id : this.blogid
      }

      this.blogService.updateBlog(Jsondata1).subscribe((data) => {
        if(data.status == "True" || data.status =="true"){
          this.notificationService.showSuccess("Blog Updated Successfully", "Success");
          this.blogsDetail.splice(this.selectedIndex , 1 , data.data[0]);
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
    var JsonData1  = {
      id : this.blogid
    }
    this.blogService.deleteBlog(JsonData1).subscribe((res) => {
      if (res.status == "True" || res.status == "true") {
        this.blogsDetail.splice(this.selectedIndex, 1);
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
