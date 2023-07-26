import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { PortfolioRecomService } from '../portfolio-recom.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-existing-recommendation',
  templateUrl: './existing-recommendation.component.html',
  styleUrls: ['./existing-recommendation.component.scss']
})
export class ExistingRecommendationComponent implements OnInit {

  public goals : any[] = [];
  public totalInvestment : any = 0;
  loggedInUser! : User ;

  constructor(private dataService : DataService, private router: Router, private portfolioRecomService : PortfolioRecomService) { }

  ngOnInit(): void {
    this.loggedInUser =  this.portfolioRecomService.getUser();
    this.getSavedGoals();
  }

  getSavedGoals(){
    var goalRequest = {
      userId :  this.loggedInUser.userid,
    }
    this.dataService.post('/CustomerPreference/getDashboardData', goalRequest).subscribe((data : any) => {
      this.goals = data['exisitngPortfolios'];
      this.totalInvestment = this.sum(this.goals);
    }, error => {
      this.dataService.getMock('assets/mockData/exisitngPortfolioData.json').subscribe((data : any) => {
        this.goals = data['exisitngPortfolios'];
        this.totalInvestment = this.sum(this.goals);
    });
    });
  }

      sum( arr : any ) {
        var res = 0;
        for(let i = 0; i < arr.length; i++){
          res += arr[i].investmentAmount;
      };
        return res;
      }

  getStyle(goal : any){
    var width = (goal.investmentAmount / this.totalInvestment)  * 100 ;
    console.log(width);
    return width;
  }

  getFirstLetter(goal:any,index:number){
      var name = goal.portfolioName? goal.portfolioName:"G";
      return name.charAt(0);
  }


  goToclientPreference(){
    this.router.navigateByUrl('/clientPreference');
  }

  goToRebalance(){
    this.router.navigateByUrl('/recommendation');
  }

}
