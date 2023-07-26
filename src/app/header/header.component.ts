import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { User } from '../shared/models/user';
import { PortfolioRecomService } from '../portfolio-recom.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() inputFromParent : boolean = true;

  user! : User;
  name! : String;
  constructor(private router: Router, private portfolioRecomService : PortfolioRecomService) {
    }

  ngOnInit(): void {
    try{
    this.user = this.portfolioRecomService.getUser();
    this.name = this.user.firstname + " " + this.user.lastname;
    }catch(error){
      this.name = 'Steven Jones';
    }
  }

}
