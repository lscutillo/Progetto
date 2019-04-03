import { Injectable } from '@angular/core';
import { MenuItem } from '../objects/menuItem';
import { RoutingEnum } from '../routingEnum';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  listMenu: Array<MenuItem> = [
    new MenuItem('Home Page', RoutingEnum.separator +RoutingEnum.base + RoutingEnum.separator + RoutingEnum.home),
    new MenuItem('I Nostri Prodotti', RoutingEnum.separator + RoutingEnum.base + RoutingEnum.separator + RoutingEnum.product),
    new MenuItem('Le Nostre Marche', RoutingEnum.separator + RoutingEnum.base + RoutingEnum.separator + RoutingEnum.cards),
    new MenuItem('Feedback', RoutingEnum.separator + RoutingEnum.base + RoutingEnum.separator + RoutingEnum.feedback),
    new MenuItem('Profilo', RoutingEnum.separator + RoutingEnum.base + RoutingEnum.separator + RoutingEnum.profilo),
  ]

  constructor() { }

  getList() {
    return this.listMenu;
  }
}
