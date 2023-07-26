import { Component, OnInit } from '@angular/core';
import { StockDetails } from '../models/StockDetails';
import { DataService } from '../services/data.service';
import { ColDef } from 'ag-grid-community';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-stock-list',
  templateUrl: './final-stock-list.component.html',
  styleUrls: ['./final-stock-list.component.scss']
})
export class FinalStockListComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) { }
  finalStocks: any[] = []
  

  columnDefs: ColDef[] = [
    {field: "isSelected", headerName: ""},
    {field: "Symbol", headerName: "Symbol"},
    {field: "AssetName", headerName: "AssetName"},
    {field: "StockName", headerName: "StockName"},
  ]
  
  rowData: StockDetails[] = []

  ngOnInit(): void {
    this.getFinalStocks();
    console.log(this.finalStocks)
  }

  public getFinalStocks(){
    this.finalStocks = this.dataService.getSelectedSecurityData();
    
    // this.dataService.getMock('assets/mockData/finalStock.json').subscribe((result : any) => {
    //   result.forEach((res : any) => 
    //     this.finalStocks.push(res)
    //     )
    //   this.rowData = this.finalStocks
    // });
  }

  goToRecommendationPage(){
    this.router.navigateByUrl('/recommendation');
  }
  buyStocks(){
    var saveRequest = {
      userId : '1',
      customerPreferenceId : '1',
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
