import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 
  submitted = false;

  inputForm : FormGroup = this.formBuilder.group({
    investmentAmount : ['', Validators.required],
    age: ['', Validators.required],
    investmentDuration : ['', [Validators.required]],
    investmentSector : ['', [Validators.required]],
    marketCapitalization : ['', Validators.required],
    portfolioRateOfReturn : ['', Validators.required]
});
 

  constructor(private dataService : DataService,  private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.dataService.sendGetRequest().subscribe(data=>{
    //   console.log(data);
    //   this.cars = data;
    // });
  
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
          investmentAmount : this.inputForm.controls.investmentAmount.value,
          age : this.inputForm.controls.age.value,
          investmentDuration : this.inputForm.controls.investmentDuration.value,
          investmentSector : this.inputForm.controls.investmentSector.value,
          marketCapitalization : this.inputForm.controls.marketCapitalization.value,
          portfolioRateOfReturn : this.inputForm.controls.portfolioRateOfReturn.value,
          userId : 1,
    }
    console.log(preferenceRequest);
    this.dataService.post('/CustomerPreference/savePreference', preferenceRequest).subscribe(
       (data : any) => {
        console.log(data);
    },
    error => {
        console.error('There was an error!', error);
    });
  }

}
