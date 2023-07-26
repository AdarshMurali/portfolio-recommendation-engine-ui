import { Component, OnInit } from '@angular/core';
import { StockDetails } from '../models/StockDetails';
import { DataService } from '../services/data.service';
import { ColDef } from 'ag-grid-community';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';
import { PortfolioRecomService } from '../portfolio-recom.service';

@Component({
  selector: 'app-final-stock-list',
  templateUrl: './final-stock-list.component.html',
  styleUrls: ['./final-stock-list.component.scss']
})
export class FinalStockListComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router, private portfolioRecomService : PortfolioRecomService) { }
  finalStocks: any[] = []
  loggedInUser! : User ;
  customerPreferenceId! : String;

  columnDefs: ColDef[] = [
    {field: "isSelected", headerName: ""},
    {field: "Symbol", headerName: "Symbol"},
    {field: "AssetName", headerName: "AssetName"},
    {field: "StockName", headerName: "StockName"},
  ]
  
  rowData: StockDetails[] = []

  ngOnInit(): void {
    this.customerPreferenceId = this.portfolioRecomService.getCustomerPreferenceId();
    this.loggedInUser =  this.portfolioRecomService.getUser();
    this.getFinalStocks();
    console.log(this.finalStocks)
  }

  public getFinalStocks(){
    this.finalStocks = this.dataService.getSelectedSecurityData();

  }

  goToRecommendationPage(){
    this.router.navigateByUrl('/recommendation');
  }
  buyStocks(){
    var saveRequest = {
      userId : this.loggedInUser.userid,
      customerPreferenceId : this.customerPreferenceId,
      securitiesList : this.finalStocks
    }
      this.dataService.post('/CustomerPreference/saveCustPreferedtocks', saveRequest).subscribe((data : any) => {
        alert('Executed successfully');
        this.router.navigateByUrl('/existingPortfolio');
      }, error => {
        alert('Executed successfully');
        this.router.navigateByUrl('/existingPortfolio');
      });

  }

}
