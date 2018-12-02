import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entity/product.entity';
import { ProductService } from 'src/app/Services/product.services';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public products: Product[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.products = this.productService.findAll();
  }

}
