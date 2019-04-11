import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardsComponent } from './components/cards/cards.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { FormsModule, FormBuilder } from '@angular/forms';
import {FooterComponent} from './components/footer/footer.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard}from './services/auth-gard.service';
import {LoginService} from './services/login.service';
import { SignUpComponent } from './components/signup/signup.component';
import { MenuService } from './services/menu.service';
import { ShoesService } from './services/shoes.service';


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
    LoginComponent,
    SignUpComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [AuthGuard,LoginService,MenuService,ShoesService,FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
