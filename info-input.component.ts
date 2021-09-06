import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, MinLengthValidator } from '@angular/forms';


@Component({
  selector: 'info-input',
  templateUrl: './info-input.component.html',
  styleUrls: ['./info-input.component.css']
})
export class InfoInputComponent  {

  formfilling = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      address: new FormControl('',Validators.required)

    });

    get email(){
      return this.formfilling.get('email');

    }
    get password(){
      return this.formfilling.get('password');
    }
  
    onSubmit(){
      console.warn(this.formfilling.value);
    }

    onReset(){
      this.formfilling.reset();
    }
  }

  
 