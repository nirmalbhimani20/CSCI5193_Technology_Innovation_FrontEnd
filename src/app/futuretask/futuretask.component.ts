import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmitvalueService } from 'src/services/emit/emitvalue.service';

@Component({
  selector: 'app-futuretask',
  templateUrl: './futuretask.component.html',
  styleUrls: ['./futuretask.component.css']
})
export class FuturetaskComponent implements OnInit {

  constructor(private router : Router, private emitValue : EmitvalueService) { }

  ngOnInit(): void {
    var role=  localStorage.getItem("role");
    var userlogin =  localStorage.getItem("userLogin");
    var id  = localStorage.getItem("id");

   
    if(role == 'user' || role == 'instructor'){
   
        this.router.navigate(['/futuretask']);
        this.emitValue.roleEmit(role);
        this.emitValue.userLogin("true");
      
    }
    else {
      this.router.navigate(['/home']);
      localStorage.clear();
    }
  }

}
