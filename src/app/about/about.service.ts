import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService {


  constructor(private httpClient : HttpClient) { }

  getLatestNews(url : string){
    return this.httpClient.get(url);
  }
}
