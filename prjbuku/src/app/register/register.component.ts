import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm : FormGroup;
  submitted : boolean = false;
  exexuteState : string = '';
  showSpinner = false;
  private registerSub : Subscription = new Subscription();

  constructor(
    private fb: FormBuilder
  ){
    this.registerForm = this.fb.group(
      {
        email : ['',[Validators.required,Validators.email]],
        password : ['',[Validators.required,Validators.minLength(8)]],
        confirmPassword : ['',[Validators.required]]
      }
    );
  }
}
