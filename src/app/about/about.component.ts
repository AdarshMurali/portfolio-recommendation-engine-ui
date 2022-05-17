import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  teslaLastmonthNewsUrl : string = "https://newsapi.org/v2/everything?q=tesla&from=2021-11-15&sortBy=publishedAt&apiKey=74c20057e29e4641a38b5d00c39bd93f";

  teslaNews : any = [];
  selectedNews : any = {};

  constructor(private aboutService: AboutService) {
    this.initTeslaData();
   }

  ngOnInit(): void {

  }

  initTeslaData(){
    this.aboutService.getLatestNews(this.teslaLastmonthNewsUrl)
    .subscribe( (data : any) => {
      this.teslaNews = data.articles;
      this.selectedNews = this.teslaNews[0];
    }, error => {
      console.log("Error "+error);
    });
  }

  setSelectedNews(news : any){
    this.selectedNews = news;
  }

}
