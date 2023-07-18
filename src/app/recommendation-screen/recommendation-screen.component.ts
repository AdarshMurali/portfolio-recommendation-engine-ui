import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../shared/models/user';
import { PortfolioRecomService } from '../portfolio-recom.service';

@Component({
  selector: 'app-recommendation-screen',
  templateUrl: './recommendation-screen.component.html',
  styleUrls: ['./recommendation-screen.component.scss']
})
export class RecommendationScreenComponent implements OnInit {

  public recommendedSecurities! : any[] ;
  loggedInUser! : User ;

  constructor(private dataService : DataService, private portfolioRecomService : PortfolioRecomService) { }

  ngOnInit(): void {
    this.loggedInUser =  this.portfolioRecomService.getUser();
    this.getUserRecommendation();
  }

    getUserRecommendation(){

    var getRecommendationRequest = {
      // userId : this.loggedInUser.userid,
      userId : 3,
    }
      // this.dataService.post('/CustomerPreference/getRecommendation', getRecommendationRequest).subscribe(
      //     (data : any) => {
      //       this.recommendedSecurities = data['recommendedSecurities'];
      //       console.log(this.recommendedSecurities);
      // },
      // error => {
      //     console.error('There was an error!', error);
      // });

      this.dataService.getMock('assets/mockData/recommendation.json').subscribe(
          (data : any) => {
            this.recommendedSecurities = data['recommendedSecurities'];
            console.log(this.recommendedSecurities);
        },
        error => {
            console.error('There was an error!', error);
        });

        

    }
    

}
