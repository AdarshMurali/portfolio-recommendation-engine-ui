import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { PortfolioRecomService } from '../portfolio-recom.service';
import { User } from '../shared/models/user';
import { ColDef } from 'ag-grid-community';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 
  submitted = false;
  loggedInUser! : User ;
  inputForm! : FormGroup;

  constructor(private dataService : DataService,  private formBuilder: FormBuilder, private portfolioRecomService : PortfolioRecomService, private router: Router) { }

  ngOnInit(): void {
    this.setForm();
    this.loggedInUser =  this.portfolioRecomService.getUser();
  }

  setForm(){
    console.log('calling setform');
    this.inputForm  = this.formBuilder.group({
      investmentAmount : ['', Validators.required],
      investmentDuration: ['', Validators.required ],
      investmentSector : ['', [Validators.required]],
      volatility : ['', Validators.required],
      portfolioName : ['', Validators.required],
  });
  }

  reset() {
    this.inputForm.reset();
    this.inputForm.markAsPristine;
    this.inputForm.markAsUntouched
    this.setForm();
  }

  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];
  
  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxster', price: 72000 }
  ];

  defaultColDef = {
    sortable: true
  };
  
  // / convenience getter for easy access to form fields
  get f() { return this.inputForm.controls; }

  onSubmit(){

    // this.router.navigateByUrl('/recommendation'); //ToDo - Need to remove

    this.submitted = true;
    // stop here if form is invalid
    if (this.inputForm.invalid) {
        return;
    }

    var preferenceRequest = {
          investmentAmount : this.inputForm.controls.investmentAmount.value,
          investmentDuration : this.inputForm.controls.investmentDuration.value,
          investmentSector : this.inputForm.controls.investmentSector.value,
          volatility : this.inputForm.controls.volatility.value,
          portfolioName : this.inputForm.controls.portfolioName.value,
          // userId : this.loggedInUser.userid,
          // userId : 3,
    }
    console.log(preferenceRequest);
    return;
    this.dataService.post('/CustomerPreference/savePreference', preferenceRequest).subscribe(
       (data : any) => {
        if(data.customerPreferenceId){
          console.log(data);
          this.reset();
          this.inputForm.reset(this.inputForm.value)
        }else{

        }
    },
    error => {
        console.error('There was an error!', error);
    });
  }

}
