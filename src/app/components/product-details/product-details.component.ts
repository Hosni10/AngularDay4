import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  productId!:number;
  selectedProd:any;
  constructor(private route:ActivatedRoute, private productServ:ProductsService ){

  }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'))
    this.productServ.getProductById(this.productId).subscribe((detailsProduct)=>{
      this.selectedProd=detailsProduct;
    })
  }

}
