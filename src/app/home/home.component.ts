import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cars : any = [];

  inputForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private dataService : DataService,  private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe(data=>{
      console.log(data);
      this.cars = data;
    });
  }

  onSubmit(){
    
  }

}
