import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:8080";

  constructor(private httpClient : HttpClient) { }

  get(url : any){
    return this.httpClient.get(this.REST_API_SERVER + url);
  }

  post(url : string, request : any){
    return this.httpClient.post(url, request);
  }
}
