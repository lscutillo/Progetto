import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/objects/menuItem';
import { MenuService } from 'src/app/services/menu.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(private menuService: MenuService, private loginService: LoginService, private router: Router) { }

  menu: MenuItem[];
  display = false;

  ngOnInit() {
    this.menu = this.menuService.getList();
  }

  checkLink(description){
    if (description=="I Nostri Prodotti" || description=="Le Nostre Marche"){
      this.display=true;
    }
    else
      this.display=false;
  }

  isSessionEmpty(){
    //this.username=this.loginService.getUsername();
    if (sessionStorage.length == 0)
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
