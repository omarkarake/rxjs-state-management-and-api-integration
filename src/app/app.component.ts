import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product/product-service.service';
import { CartService } from './services/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'rxjs-state-management-and-api-integration';
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.productService.init();
  }
  ngOnInit(): void {
    this.productService.products$.subscribe((data) => {
      console.log('Data initial in app component: ', data);
    });
    this.cartService.cart$.subscribe((data) => {
      console.log('Data initial in cart: ', data);
    });
  }
}
