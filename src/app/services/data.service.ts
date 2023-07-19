import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = environment.API_URL || "http://localhost:8080";

  constructor(private httpClient : HttpClient) { }

  get(url : any){
    return this.httpClient.get(this.REST_API_SERVER + url);
  }

  post(url : string, request : any){
    return this.httpClient.post(this.REST_API_SERVER + url, request);
  }

  
  getMock(url : any){
    return this.httpClient.get(url);
  }
}
