import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, retry } from 'rxjs';
import { Product } from '../../model/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productUrl: string = 'assets/data.json';
  productSubject = new BehaviorSubject<Product[]>([]);
  products$: Observable<Product[]> = this.productSubject.asObservable();

  constructor(private http: HttpClient) {}

  init(): void {
    this.getProducts(); // Calls the API
  }

  getProducts() {
    this.http
      .get<Product[]>(this.productUrl)
      .pipe(
        retry(1),
        catchError((error) => {
          console.error('Error fetching data: ', error);
          return of([]);
        })
      )
      .subscribe((data) => this.productSubject.next(data));
  }
}
