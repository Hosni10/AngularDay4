import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../models/IProduct';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  allProducts:IProduct[]=[]
  
  constructor(public productServ:ProductsService ){

  }

    ngOnInit(): void {
     this.productServ.getAllProducts().subscribe((productData)=>{this.allProducts = productData

     })
    }
}
