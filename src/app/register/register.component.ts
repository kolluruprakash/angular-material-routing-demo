import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string='';
  constructor()  {
    
   }
  ngOnInit() {
  }
  doregesterMe(){
    console.log("Registration was successful!");
  }
  sendOTP(){
    alert("Enter Valid mobile no!");
  }

}