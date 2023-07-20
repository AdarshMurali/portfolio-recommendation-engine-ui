import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() inputFromParent : boolean = true;

  constructor(private router: Router) {
    }

  ngOnInit(): void {
  }

}
