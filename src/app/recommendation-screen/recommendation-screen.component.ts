import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../shared/models/user';
import { PortfolioRecomService } from '../portfolio-recom.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-recommendation-screen',
  templateUrl: './recommendation-screen.component.html',
  styleUrls: ['./recommendation-screen.component.scss']
})
export class RecommendationScreenComponent implements OnInit {

  public recommendedSecurities! : any[] ;
  public recomendedData! : any;
  loggedInUser! : User ;
  selectedSecurities: any[] = [];
  selectedSecuritiesName: any[] = [];

  savedStockData : any[] = [];

  constructor(private dataService : DataService, private portfolioRecomService : PortfolioRecomService, private router: Router) { }

  ngOnInit(): void {
    this.loggedInUser =  this.portfolioRecomService.getUser();

    this.savedStockData = this.portfolioRecomService.getSavedStockData();
    debugger;
    this.getUserRecommendation();
  }

  checkDisable(){
    var value =  this.selectedSecuritiesName.length <= 0 ? true : false;
    console.log(value);
    return value;
  }

    getUserRecommendation(){
      this.recomendedData = this.dataService.getRecomendedData();
    }
    
    onChange(value: any): void {
      if (this.selectedSecuritiesName.includes(value.tickerSymbol)) {
        this.selectedSecuritiesName = this.selectedSecuritiesName.filter((item) => item !== value.tickerSymbol);
        this.selectedSecurities = this.selectedSecurities.filter((item) => item.tickerSymbol !== value.tickerSymbol);
      } else {
        this.selectedSecuritiesName.push(value.tickerSymbol);
        this.selectedSecurities.push(value);
      }
      console.log(this.selectedSecurities);
    }

    goToFinalStockList(){
      console.log(this.selectedSecurities);
      this.dataService.setSelectedSecurityData(this.selectedSecurities);
      this.router.navigateByUrl('/finalList');
    }

    goToRecommendations(){
      this.router.navigateByUrl('/clientPreference')
    }
}
