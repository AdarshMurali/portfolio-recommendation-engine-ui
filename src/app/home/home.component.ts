import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cars : any = [];

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe(data=>{
      console.log(data);
      this.cars = data;
    });
  }


}
