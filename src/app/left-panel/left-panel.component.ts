import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../home/player';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  @Input() crickPlayers : Player[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
