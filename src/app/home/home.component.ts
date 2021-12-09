import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var jQuery: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  redirectToBlogDetail(){
    console.log(" in redirect to blog detail method");
    this.router.navigate(['/blogDetail']);
  }

  redirectTOInstructorDetail(){
    this.router.navigate(['/instructorDetail']);
  }
}
