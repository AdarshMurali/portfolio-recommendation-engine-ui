import { Component, OnInit } from '@angular/core';
import { StockDetails } from '../models/StockDetails';
import { DataService } from '../services/data.service';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-final-stock-list',
  templateUrl: './final-stock-list.component.html',
  styleUrls: ['./final-stock-list.component.scss']
})
export class FinalStockListComponent implements OnInit {
  constructor(private dataService: DataService) { }
  FinalStocks: StockDetails[] = []
  
  public getFinalStocks(){
    this.dataService.getFinalStockList().subscribe(result => {
      result.forEach(res => 
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

}
