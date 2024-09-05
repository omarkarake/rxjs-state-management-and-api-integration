import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, retry } from 'rxjs';
import { Product } from '../model/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  productUrl: string = 'assets/data.json'; // Ensure correct URL
  private productSubject = new BehaviorSubject<Product[]>([]);
  products$: Observable<Product[]> = this.productSubject.asObservable();

  constructor(private http: HttpClient) {}

  init(): void {
    this.getDesserts(); // Calls the API
  }

  getDesserts() {
    this.http
      .get<Product[]>(this.productUrl)
      .pipe(
        retry(1),
        catchError((error) => {
          console.error('Error fetching data: ', error); // Better logging for error
          return of([]); // Returning empty array on error
        })
      )
      .subscribe((data) => this.productSubject.next(data)); // Push the fetched data to BehaviorSubject
  }
}
