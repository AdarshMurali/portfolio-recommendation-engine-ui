import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FinalStockListComponent } from './final-stock-list/final-stock-list.component';
import { RecommendationScreenComponent } from './recommendation-screen/recommendation-screen.component';
import { ExistingRecommendationComponent } from './existing-recommendation/existing-recommendation.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path:  'login', component:  LoginComponent},
  { path:  'signup', component:  SignupComponent},
  { path:  'home', component:  HomeComponent},
  { path:  'finallist', component:  FinalStockListComponent},
  { path:  'recommendation', component:  RecommendationScreenComponent},
  { path:  'existingPortfolio', component:  ExistingRecommendationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
