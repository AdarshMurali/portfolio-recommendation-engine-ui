import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-existing-recommendation',
  templateUrl: './existing-recommendation.component.html',
  styleUrls: ['./existing-recommendation.component.scss']
})
export class ExistingRecommendationComponent implements OnInit {

  public goals : any[] = [];
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.getSavedGoals();
  }

  getSavedGoals(){
    this.dataService.getMock('assets/mockData/savedGoals.json').subscribe((data : any) => {
        this.goals = data['exisitngPortfolios'];
    });


  }

  goToRecomendation(){

  }

}
