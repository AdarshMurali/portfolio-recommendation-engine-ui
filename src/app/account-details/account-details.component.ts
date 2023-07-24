import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private dataService : DataService) { }
  public submitted : boolean = false;
  public countries : any[] = [];
  public states : any[] = [];

  inputForm : FormGroup = this.formBuilder.group({
    address1: ['', Validators.required, Validators.maxLength(6)],
    address2: [, Validators.required],
    mobile: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: [ '', [Validators.required]],
    country: [ '', [Validators.required]]
  });
  
  ngOnInit(): void {
    this.getCountryAndState();
  }


  getCountryAndState(){
        
    this.dataService.getMock('/assets/mockData/countAndState.json').subscribe((result : any) => {
        this.countries = result.countries;

    });
  }
  get f() { return this.inputForm.controls; }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.inputForm.invalid) {
        return;
    }

    var signupRequest = {
      address1 : this.inputForm.controls.address1.value,
      address2 : this.inputForm.controls.address2.value,
      mobile : this.inputForm.controls.mobile.value,
      city : this.inputForm.controls.city.value,
      state : this.inputForm.controls.state.value,
      country : this.inputForm.controls.country.value
    }
    console.log(signupRequest);

    this.router.navigateByUrl('/home');
  }

  onClear(){
    this.inputForm.reset();
  }
}
