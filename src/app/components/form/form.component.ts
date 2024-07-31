import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  isUserLoggedIn: boolean = false;
  allProducts: any[] = [];
  formValues = new FormGroup({
    productName: new FormControl('', Validators.required),
    productPrice: new FormControl('', Validators.required),
    productCategory: new FormControl('', Validators.required),
    productImage: new FormControl('', Validators.required),
  });
  constructor(
    private loginService: LoginService,
    private productServ: ProductsService
  ) {}
  ngOnInit() {
    this.loginService.isUserLoggedIn.subscribe((resp: boolean) => {
      this.isUserLoggedIn = resp;
    })
  }
  onAddProduct() {
    console.log(this.productServ.updatedProduct);
    console.log(this.formValues.value);
    this.productServ.updatedProduct.subscribe((resp: any) => {
      this.allProducts = resp;
    });
    this.allProducts.push({
      title: this.formValues.value.productName,
      price: this.formValues.value.productPrice,
      category: this.formValues.value.productCategory,
      image: this.formValues.value.productImage
    });
    this.productServ.updatedProduct.next(this.allProducts);
  }
}
