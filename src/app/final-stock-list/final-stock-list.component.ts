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
  FinalStocks: StockDetails[] = []
  
  public getFinalStocks(){
    // this.dataService.getFinalStockList().subscribe(result => {
    //   result.forEach(res => 
    //     this.FinalStocks.push(res)
    //     )
    // });

    this.dataService.getMock('assets/mockData/finalStock.json').subscribe((result : any) => {
      result.forEach((res : any) => 
        this.FinalStocks.push(res)
        )
      this.rowData = this.FinalStocks
    });



  }
  columnDefs: ColDef[] = [
    {field: "isSelected", headerName: ""},
    {field: "Symbol", headerName: "Symbol"},
    {field: "AssetName", headerName: "AssetName"},
    {field: "StockName", headerName: "StockName"},
  ]
  
  rowData: StockDetails[] = []

  ngOnInit(): void {
    this.getFinalStocks();
    console.log(this.FinalStocks)
  }

  goToRecommendationPage(){
    this.router.navigateByUrl('/recommendation');
  }
  buyStocks(){
      alert('Executed successfully');
      this.router.navigateByUrl('/existingPortfolio');
  }

}
