import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }
  public submitted : boolean = false;

  inputForm : FormGroup = this.formBuilder.group({
    name: ['', Validators.required, Validators.maxLength(6)],
    age: [, Validators.required],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    income: [, [Validators.required]]
  });
  
  ngOnInit(): void {
  }
  get f() { return this.inputForm.controls; }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.inputForm.invalid) {
        return;
    }

    var signupRequest = {
      name : this.inputForm.controls.name.value,
      lastname : this.inputForm.controls.lastName.value,
      email : this.inputForm.controls.email.value,
      age : this.inputForm.controls.age.value,
      income : this.inputForm.controls.income.value
    }
    console.log(signupRequest);

  }

  onClear(){
    this.inputForm.reset();
  }
}
