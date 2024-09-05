import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product/product-service.service';
import { CartService } from './services/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'rxjs-state-management-and-api-integration';
  totalItems$: Observable<number> = this.cartService.totalItems$;
  isModalOpen = false;
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.productService.init();
  }
  ngOnInit(): void {
    this.cartService.cart$.subscribe((data) => {
      console.log('Data initial in cart: ', data);
    });
  }

  // Toggle modal open/close
  toggleModal(): void {
    this.isModalOpen = !this.isModalOpen;
  }
}
