import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { ContactInstructorComponent } from './contact-instructor/contact-instructor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FuturetaskComponent } from './futuretask/futuretask.component';
import { HomeComponent } from './home/home.component';
import { InstructorblogComponent } from './instructorblog/instructorblog.component';
import { InstructorqueriesComponent } from './instructorqueries/instructorqueries.component';
import { LoginComponent } from './login/login.component';
import { PrevioustaskComponent } from './previoustask/previoustask.component';
import { RegisterComponent } from './register/register.component';
import { TaskComponent } from './task/task.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { UsersectionComponent } from './usersection/usersection.component';
import { ProfileComponent } from "./profile/profile.component";
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { InstructordetailComponent } from './instructordetail/instructordetail.component';



const routes: Routes = [

  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactInstructorComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'userQueries',
    component: InstructorqueriesComponent
  },
  {
    path: 'userSection',
    component: UsersectionComponent
  },
  {
    path: 'instructorBlog',
    component: InstructorblogComponent
  },
  {
    path: 'blogDetail',
    component: BlogdetailComponent
  },
  {
    path: 'instructorDetail',
    component: InstructordetailComponent
  },
  {
    path: 'task',
    component: TaskComponent
  },

  { path: 'tasklist',
   component: TasklistComponent 
  },

  { path: 'previoustask',
   component: PrevioustaskComponent
   },

  { path: 'futuretask',
    component: FuturetaskComponent
   },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {   scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
