import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AppConstants } from 'src/app/modules/user/objects/AppConstants';
import { UserService } from 'src/app/service/user/user.service';
import { User } from "../../objects/User";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  model: NgbDateStruct;

  user: User;

  id : number;

  mode: number = 0;

  userDetailsForm: FormGroup;

  constructor(
    private userDetailsFromBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.user = new User();
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      if (params.id && params.id != 0) {
        this.Get(params.id);
        this.mode = 1;
        this.id = params.id;
      }
    })
    
    this.inititateUserDetailsForm();
    console.log(this.user);
    
    console.log(this.user);
  }

  async Get(id: number) {
    this.user = await this.userService.Get(id); 
    this.userDetailsForm.get('first_name').setValue(this.user.first_name);
    this.userDetailsForm.get('last_name').setValue(this.user.last_name);
    this.userDetailsForm.get('email').setValue(this.user.email);
    this.userDetailsForm.get('avatar').setValue(this.user.avatar);
  }

  inititateUserDetailsForm(): void {
    
    this.userDetailsForm = this.userDetailsFromBuilder.group({

      first_name: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern(AppConstants.NameValidatorRegex)
        ]
      ),

      last_name: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern(AppConstants.NameValidatorRegex)
        ]
      ),

      email: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern(AppConstants.EmailValidatorRegex)
        ]
      ),

      avatar: new FormControl(
        '',
        [
          Validators.required
        ]
      ),

    });

  }

  onSubmit() {
    if (this.mode == 0) {
      this.Add();
    } else {
      this.Update();
    }
  }

  async Add() {
    let user = new User();
    user.email = this.userDetailsForm.get('email').value;
    user.first_name = this.userDetailsForm.get('first_name').value;
    user.last_name = this.userDetailsForm.get('last_name').value;    
    user.avatar = this.userDetailsForm.get('avatar').value;
    //user.createdDate = new DatePipe('en-US').transform(Date.now(), 'yyyymmdd');
    const resp = await this.userService.Post(user);
    this.router.navigate(['/App/List']);
  }

  async Update() {
    let user = new User();
    user.id = this.id
    user.email = this.userDetailsForm.get('email').value;
    user.first_name = this.userDetailsForm.get('first_name').value;
    user.last_name = this.userDetailsForm.get('last_name').value;    
    user.avatar = this.userDetailsForm.get('avatar').value;    
    //user.updatedDate = new DatePipe('en-US').transform(Date.now(), 'mm-dd-yyyy');
    const resp = await this.userService.Put(user); 
    this.router.navigate(['/App/List']);
  }


}
