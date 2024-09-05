import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // Private BehaviorSubject to hold the current cart state
  private cartSubject = new BehaviorSubject<Product[]>([]);

  // Public observable for other components to access the cart state
  cart$: Observable<Product[]> = this.cartSubject.asObservable();

  constructor() {}

  // Add product to the cart
  addToCart(product: Product): void {
    const currentCart = this.cartSubject.value;
    this.cartSubject.next([...currentCart, product]);
  }

  // Remove product from the cart by id
  removeFromCart(productId: number): void {
    const currentCart = this.cartSubject.value;
    const updatedCart = currentCart.filter((item) => item.id !== productId);
    this.cartSubject.next(updatedCart);
  }

  // Clear all products from the cart
  clearCart(): void {
    this.cartSubject.next([]);
  }

  // Observable to track the total number of items in the cart
  totalItems$: Observable<number> = this.cart$.pipe(
    map((items) => items.length)
  );
}
