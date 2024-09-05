import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems$: Observable<Product[]> = this.cartService.cart$; // Observable for the cart items
  totalItems$: Observable<number> = this.cartService.totalItems$; // Observable for the total number of items

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  // Method to remove a product from the cart
  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  // Method to clear the entire cart
  clearCart(): void {
    this.cartService.clearCart();
  }
}
