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

  constructor(private dataService : DataService, private portfolioRecomService : PortfolioRecomService, private router: Router) { }

  ngOnInit(): void {
    this.loggedInUser =  this.portfolioRecomService.getUser();
    this.getUserRecommendation();
  }

    getUserRecommendation(){

      this.recomendedData = this.dataService.getRecomendedData();

      // this.dataService.getMock('assets/mockData/recommendation.json').subscribe(
      //     (data : any) => {
      //       this.recommendedSecurities = data['recommendedSecurities'];
      //       console.log(this.recommendedSecurities);
      //   },
      //   error => {
      //       console.error('There was an error!', error);
      //   });
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
      this.router.navigateByUrl('/finalList');
    }
}
