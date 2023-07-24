import { Component } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';
import { RegistrationComponent } from '../registration/registration.component';
import { NewUser } from '../registration/NewUser';
import { filter } from 'rxjs';
import { RegisterDetailsService } from '../register-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  uObj:User;

  Registered:NewUser[];
  router: Router = new Router;

  constructor(private detailsservice:RegisterDetailsService)
  {
    this.uObj = new User();
    this.Registered=[];

  }

 userLogin()
  {
    //this.noteObj = noteForm.value;
    console.log(this.uObj.username)
    this.detailsservice.getDetails().subscribe(
      ruser=>{this.Registered=ruser
        console.log(ruser)


      },
      err=>{console.log(err)}
      
    )
    
    const details=this.Registered.filter(user=>user.username==this.uObj.username && user.password==this.uObj.password);
    if(details.length!=0)
    {
      this.router.navigate("")
      alert("Login Successful");
    }

  }
}
