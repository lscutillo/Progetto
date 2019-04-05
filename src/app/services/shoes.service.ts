import { ShoesItem } from '../objects/shoesItem';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class ShoesService{

    private shoesList: Array<ShoesItem> = [
        new ShoesItem('Air Max 270', 'Nike', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur', 70, 5),
        new ShoesItem('Vans Old Skool', 'Vans', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur', 70, 5),
        new ShoesItem('Air Vapor Max', 'Nike','bello',  70, 5),
        new ShoesItem('New Balance 574', 'New Balance','bello', 70, 5),
        new ShoesItem('Converse Chuck 70 Classic', 'Converse', 'bello', 70, 5),
        new ShoesItem('Reebok Daytona', 'Reebok', 'bello', 70, 5),
    ]

    getShoeslist(){
        return this.shoesList;
    }

    getShoe(id: number){
        return this.shoesList[id];
    }
}