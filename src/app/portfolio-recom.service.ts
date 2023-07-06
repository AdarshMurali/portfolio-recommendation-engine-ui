import { Injectable } from '@angular/core';
import { User } from './shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class PortfolioRecomService {

  loggedInUser! : User ;

  constructor() { }

  setUser(user : User){
    this.loggedInUser = user;
  }

  getUser(){
    return this.loggedInUser;
  }
}
