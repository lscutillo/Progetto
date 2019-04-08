import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardsComponent } from './components/cards/cards.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { FormsModule } from '@angular/forms';
import {FooterComponent} from './components/footer/footer.component';
import { FeedbackProvaGridComponent } from './components/feedback-prova-grid/feedback-prova-grid.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth-gard.service';
import { LoginService } from './services/login.service';
import { MenuService } from './services/menu.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    MenuComponent,
    CardsComponent,
    FeedbackComponent,
    ProfiloComponent,
    FooterComponent,
    FeedbackProvaGridComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuard, LoginService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
