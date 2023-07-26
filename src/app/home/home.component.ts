import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import { CommonModule, CurrencyPipe} from '@angular/common';
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
  investmentSector! : any;

  constructor(private dataService : DataService,  private formBuilder: FormBuilder, private portfolioRecomService : PortfolioRecomService, private router: Router,
    private currencyPipe : CurrencyPipe) { }

  ngOnInit(): void {
    this.setForm();
    this.loggedInUser =  this.portfolioRecomService.getUser();
    this.investmentSector = this.fetchInvestmentSector();
  }

  setForm(){
    console.log('calling setform');
    this.inputForm  = this.formBuilder.group({
      investmentAmount : ['', Validators.required],
      investmentDuration: ['12', Validators.required ],
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

  
  transformAmount(element : any){
    element.target.value = this.currencyPipe.transform(this.inputForm.controls.investmentAmount.value, '$');
  }

  fetchInvestmentSector(){
    this.dataService.get('/CustomerPreference/getInvestmentSector/').subscribe((data : any) => {
      this.investmentSector = data;
    }, error => {
      this.dataService.getMock('assets/mockData/investmentSector.json').subscribe((data : any) => {
        this.investmentSector = data;
      });
   });
  }
  
  // / convenience getter for easy access to form fields
  get f() { return this.inputForm.controls; }

  onSubmit(){

    this.submitted = true;
    // stop here if form is invalid
    if (this.inputForm.invalid) {
        return;
    }

    var preferenceRequest = {
          investmentAmount : parseInt(this.inputForm.controls.investmentAmount.value),
          investmentDuration : this.inputForm.controls.investmentDuration.value,
          investmentSector : this.inputForm.controls.investmentSector.value,
          volatility : this.inputForm.controls.volatility.value,
          portfolioName : this.inputForm.controls.portfolioName.value,
          userId : this.loggedInUser.userid,
    }
    console.log(preferenceRequest);

    this.dataService.post('/CustomerPreference/savePreference', preferenceRequest).subscribe(
       (data : any) => {
        if(data.stockDetails.length > 0){
          console.log(data.customerPreference.customerPreferenceId);
          this.portfolioRecomService.setCustomerPreferenceId(data.customerPreference.customerPreferenceId);
          this.dataService.setRecomendedData(data);
          this.router.navigateByUrl('/recommendation'); 
        }else{
          alert('Please choose other crietria');
        }
    },
    error => {
      this.dataService.getMock('/assets/mockData/recemended.json').subscribe(
          (data : any) => {
            this.dataService.setRecomendedData(data);
            this.router.navigateByUrl('/recommendation'); 
        });
        console.error('There was an error!', error);
    });
  }

  goToHomePage(){
    this.router.navigateByUrl('/home'); 
  }
}
