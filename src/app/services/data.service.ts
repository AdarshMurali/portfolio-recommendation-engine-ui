import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = environment.backendUrl ;
  // private REST_API_SERVER = "http://localhost:8080";
  private httpheadersGet = new HttpHeaders().set("Access-Control-Allow-Origin", "*");

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
}
