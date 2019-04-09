import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { MenuItem } from 'src/app/objects/menuItem';
import { MenuService } from 'src/app/services/menu.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, DoCheck{
  constructor(private menuService: MenuService, private loginService: LoginService, private router: Router) { }
  
  auth: boolean;
  menu: MenuItem[];
  displaySearch = false;

  ngOnInit() {
    this.menu = this.menuService.getList();
  }
  ngDoCheck(){
    this.auth = this.loginService.isAuth;
  }

  checkLink(description){
    if (description=="I Nostri Prodotti" || description=="Le Nostre Marche"){
      this.displaySearch=true;
    }
    else
      this.displaySearch=false;
  }

  isSessionEmpty(){
    if (this.auth)
      return true;
    else
      return false;
  }
  doLogout()
  {
    this.loginService.logout();
    this.router.navigateByUrl('/login');
  }
}
