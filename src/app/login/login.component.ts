import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { PortfolioRecomService } from '../portfolio-recom.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public submitted : boolean = false;
  public showErrorMessage : boolean = false;
  public errorMessage : string = '';

  inputForm : FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private dataService : DataService, private portfolioRecomService : PortfolioRecomService) {
    }

  ngOnInit(): void {
  }

      // / convenience getter for easy access to form fields
      get f() { return this.inputForm.controls; }

      onSubmit(){

        this.router.navigateByUrl('/home');
        
        this.showErrorMessage = false;
        
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
        this.dataService.post('/user/login', loginRequest).subscribe(
          (data : any) => {
           console.log(data);
           if(data.user.userid){
            this.portfolioRecomService.setUser(data.user);
             this.router.navigateByUrl('/home');
           }else{
            this.showErrorMessage = true;
            this.errorMessage = 'You have entered an invalid password';
            //show popup - authentication error - password doesnot match
           }
       },
       error => {
           console.error('There was an error!', error);
           if(error.error.status == 404){
            this.showErrorMessage = true;
            this.errorMessage = 'User is not found, please signup';
            //show popup - error.error.message
           }
       });
      }

}
