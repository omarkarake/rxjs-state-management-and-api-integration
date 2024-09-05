import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../services/product/product-service.service';
import { CartService } from '../services/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  // products: Product[] = [];
  products$: Observable<Product[]> = this.productService.productSubject.asObservable();


  constructor(
    private productService: ProductService,
    private cartService: CartService // Inject CartService
  ) {}

  ngOnInit(): void {
    // Subscribe to the products observable and assign the data
    // this.productService.products$.subscribe((data) => {
    //   this.products = data;
    // });
    this.products$.subscribe((data) => {
      console.log('Data initial in app component: ', data);
    });
  }

  // Method to add product to cart
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`${product.name} added to the cart!`);
  }
}
