import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../home/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
classApplied=false;
isVisible = false; 
isVisible1 = false; 
  constructor(private authService:AuthService, private router: Router) { }
  auth:boolean = false;
  ngOnInit() {
    if(this.authService.authorise !== 3){
      this.router.navigate(['/']);
      // console.log("aa")
    }
    else if(this.authService.authorise === 3){
        this.auth = true;
        // this.accounts = this.accountService.getAccount();
        // console.log("bb")
    }
  }

  onLogout(){
    this.authService.onLogout();
  }
  onToggle() {
    if(this.classApplied==true)
    {this.isVisible=false;
      this.isVisible1=false;
    }
    this.classApplied = !this.classApplied;
  
    
  }
  onSubToggle(){
    this.isVisible=!this.isVisible;
   
  }
  onSubToggle1(){
    this.isVisible1=!this.isVisible1;
   
  }
  onLeave(){
    if(this.classApplied==false)
    {this.isVisible=false;
      this.isVisible1=false;

    }
  }
}
