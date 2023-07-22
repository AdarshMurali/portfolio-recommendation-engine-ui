import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart , NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HelloWorld';
  public showHeaderFooter : boolean = false;
  public showExisitngPortfolioLabel : boolean = true;

  constructor(private router: Router) {
    // on route change to '/login', set the variable showHead to false
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] == '/' || event['url'] == '/login' || event['url'] == '/signup') {
            this.showHeaderFooter = false;
          } else {
            // console.log("NU")
            this.showHeaderFooter = true;
          }
          if (event['url'] == '/existingPortfolio') {
            this.showExisitngPortfolioLabel = false;
          } 
        }
      });
    }

    ngOnInit() {
      this.router.events.subscribe((event) => {
          if (!(event instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0)
      });
  }

}
