import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public submitted : boolean = false;

  inputForm : FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {
    }

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
  
        var loginRequest = {
          email : this.inputForm.controls.email.value,
          password : this.inputForm.controls.password.value,
        }
    
        console.log(loginRequest);
        this.router.navigateByUrl('/home');
      }

}
