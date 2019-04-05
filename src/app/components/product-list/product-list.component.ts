import { Component, OnInit, Input } from '@angular/core';
import { ShoesService } from '../../services/shoes.service';
import { ShoesItem } from 'src/app/objects/shoesItem';
import { forEach } from '@angular/router/src/utils/collection';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  shoeslist: ShoesItem[];
  like: string[] = [];
  
  constructor(private shoesService: ShoesService) { }

  ngOnInit() {
    this.shoeslist = this.shoesService.getShoeslist();
    for (let i = 0; i < this.shoeslist.length; i++) {
      this.like[i]="far fa-heart mr-3";
    }
  }

  changeLike(index: number){
    (this.like[index]=="fas fa-heart mr-3")?(this.like[index]="far fa-heart mr-3"): (this.like[index]="fas fa-heart mr-3");
  }
}
