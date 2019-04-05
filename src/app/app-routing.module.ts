import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingEnum } from './routingEnum';
import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ProfiloComponent } from './components/profilo/profilo.component';


export const appRoutes: Routes = [
  {
    path: RoutingEnum.base, children: [
      { path: RoutingEnum.home, component: HomeComponent },
      { path: RoutingEnum.product, component: ProductListComponent },
      { path: RoutingEnum.cards, component: CardsComponent },
      { path: RoutingEnum.feedback, component: FeedbackComponent },
      { path: RoutingEnum.profilo, component: ProfiloComponent },
    ],
    //canActivateChild: [LoginControlsService]
  },
  { path: '', redirectTo: RoutingEnum.separator + RoutingEnum.base + RoutingEnum.separator + RoutingEnum.home, pathMatch: 'full' }
  //{path: RoutingEnum.login, component: LoginComponent},
  //{ path: '', redirectTo: '/' + RoutingEnum.login, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
