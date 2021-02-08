import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AppConstants } from 'src/app/modules/shared/objects/class/AppConstants';
import { User } from "../../objects/class/User";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  model: NgbDateStruct;

  user: User;

  registrationForm: FormGroup;

  constructor(private registrationFormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inititateRegistrationForm();
  }
  
  inititateRegistrationForm(): void {

    this.user = new User();

    this.registrationForm = this.registrationFormBuilder.group({

      name: new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern(AppConstants.NameValidatorRegex)
        ]
      ),

      email: new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern(AppConstants.EmailValidatorRegex)
        ]
      ),

      phoneNo: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ),

      password: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ),

      dateOfBirth: new FormControl(
        null,
        [
          Validators.required
        ]
      )

    });
  
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registrationForm.value);
  }


}
