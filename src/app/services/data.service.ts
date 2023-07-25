import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = environment.backendUrl ;
  // private REST_API_SERVER = "http://localhost:8080";
  private httpheadersGet = new HttpHeaders().set("Access-Control-Allow-Origin", "*");

  private recomendedData!: any;
  private selectedSecurityData!: any;

  constructor(private httpClient : HttpClient) { 
     

  }

  get(url : any){
    return this.httpClient.get(this.REST_API_SERVER + url, {"headers": this.httpheadersGet});
  }

  post(url : string, request : any){
    return this.httpClient.post(this.REST_API_SERVER + url, request, {"headers": this.httpheadersGet});
  }

  
  getMock(url : any){
    return this.httpClient.get(url);
  }

  setRecomendedData(data:any){
    this.recomendedData = data;
  }

  getRecomendedData():string{
    return this.recomendedData;
  }


  setSelectedSecurityData(data : any){
    this.selectedSecurityData = data;
  }

  getSelectedSecurityData(){
    return this.selectedSecurityData;
  }

}
