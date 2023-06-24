import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

   
  submitted = false;

  inputForm : FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required, Validators.maxLength(6)],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

    // / convenience getter for easy access to form fields
    get f() { return this.inputForm.controls; }

    onSubmit(){
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.inputForm.invalid) {
          return;
      }

      var signupRequest = {
        firstName : this.inputForm.controls.firstName.value,
        lastName : this.inputForm.controls.lastName.value,
        email : this.inputForm.controls.email.value,
        password : this.inputForm.controls.password.value,
      }
  
      console.log(signupRequest);
    }

}
