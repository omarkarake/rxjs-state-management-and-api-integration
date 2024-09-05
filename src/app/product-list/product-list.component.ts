import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../services/product/product-service.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService // Inject CartService
  ) {}

  ngOnInit(): void {
    // Subscribe to the products observable and assign the data
    this.productService.products$.subscribe((data) => {
      this.products = data;
    });
  }

  // Method to add product to cart
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`${product.name} added to the cart!`);
  }
}
