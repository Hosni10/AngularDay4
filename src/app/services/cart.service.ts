import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  addToCart(product: any): void {
    this.cart.push(product);
  }

  getCart(): any[] {
    return this.cart;
  }
}
