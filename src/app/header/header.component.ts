import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmitvalueService } from 'src/services/emit/emitvalue.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogoutVisible: boolean = false;
  isLoginVisible : boolean = true;
  isVisibleBeforeLoginToUser = true;

  isTaskVisibleToUser = false;

  isInstructorSectionVisibleToInstructor = false;
 

  role: any = "";
  constructor(private router: Router, private emitValue : EmitvalueService) { }

  ngOnInit( ): void {
    this.emitValue.$isUserLogin.subscribe(data => {
      if (data == 'true' || data == "True"){
        this.isLogoutVisible = true;
        this.isLoginVisible = false;
      }
      else {
        this.isLogoutVisible = false;
        this.isLoginVisible = true;
        this.isTaskVisibleToUser = false;
        this.isVisibleBeforeLoginToUser = true;
        this.isInstructorSectionVisibleToInstructor = false;
      }
    })

    this.emitValue.$userRole.subscribe(data => {
      if (data == 'instructor' || data == 'instructor'){
        this.role == "instructor";
        this.isVisibleBeforeLoginToUser = false;
        this.isInstructorSectionVisibleToInstructor = true;
      }
      else {
        this.role == "user";
        this.isTaskVisibleToUser = true;
      }
    })
  }

  redirect(url : any) {
    if(url == 'register'){
      this.router.navigate(['/register']);
    }
    else if (url == 'login'){
      this.router.navigate(['/login']);
    }
    else if (url == 'aboutus'){
      this.router.navigate(['/aboutus']);
    }
    else if (url == 'home'){
      this.router.navigate(['/home']);
    }
    else if (url == 'contact'){
      this.router.navigate(['/contact']);
    }
    else if (url == 'blog'){
      this.router.navigate(['/blog']);
    }
    else if (url == 'userQueries'){
      this.router.navigate(['/userQueries']);
    }
    else if (url == 'userSection'){
      this.router.navigate(['/userSection']);
    }
    else if (url == 'instructorBlog'){
      this.router.navigate(['/instructorBlog']);
    }
    else if (url == 'task'){
      this.router.navigate(['/task']);
    }

    
    
    
  }

  logout(){
    this.emitValue.roleEmit("user");
    this.emitValue.userLogin("false");
    this.router.navigate(['/home']);

  localStorage.clear();
  }

  

}
