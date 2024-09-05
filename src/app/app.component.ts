import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './services/product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'rxjs-state-management-and-api-integration';
  constructor(private productService: ProductServiceService) {
    this.productService.init();
  }
  ngOnInit(): void {
    this.productService.products$.subscribe((data) => {
      console.log('Data initial in app component: ', data);
    });
  }
}
