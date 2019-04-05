import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/objects/menuItem';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(private menuService: MenuService) { }
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

}
