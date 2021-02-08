import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppConstants } from 'src/app/modules/shared/objects/class/AppConstants';
import { User } from "../../objects/class/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  loginForm: FormGroup;

  constructor(private loginFormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initiateLoginForm();
  }

  initiateLoginForm(): void{    

    this.loginForm = this.loginFormBuilder.group({
     
      email: new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern(AppConstants.EmailValidatorRegex)
        ]
      ),

      password: new FormControl(
        null,
        [
          Validators.required      
        ]
      )

    });

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
  }

}
