import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../models/IProduct';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  allProducts:IProduct[]=[]
  
  constructor(public productServ:ProductsService , public cartService :CartService ){

  }

    ngOnInit(): void {
      // this.productServ.getAllProducts();
      this.productServ.updatedProduct.subscribe((resp: any) => {
        this.allProducts = resp;
      });
    }

    addToCart(product: any): void {
      this.cartService.addToCart(product);
    }
}
