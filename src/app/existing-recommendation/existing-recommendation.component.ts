import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-existing-recommendation',
  templateUrl: './existing-recommendation.component.html',
  styleUrls: ['./existing-recommendation.component.scss']
})
export class ExistingRecommendationComponent implements OnInit {

  public goals : any[] = [];
  constructor(private dataService : DataService, private router: Router) { }

  ngOnInit(): void {
    this.getSavedGoals();
  }

  getSavedGoals(){
    this.dataService.getMock('assets/mockData/savedGoals.json').subscribe((data : any) => {
        this.goals = data['exisitngPortfolios'];
    });


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
