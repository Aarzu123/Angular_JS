import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewUser } from './NewUser';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  user: NewUser = new NewUser;

  onSubmit(form: NgForm) {
    if (form.valid) {
      
      console.log(this.user);
      alert("Registration completion");
    }
  }
}
