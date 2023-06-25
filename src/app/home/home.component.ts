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
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    preference: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
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

    alert('SUCCESS!! :-)')
  }

}
