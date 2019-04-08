import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    MenuComponent,
    CardsComponent,
    FeedbackComponent,
    ProfiloComponent,
    FooterComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
