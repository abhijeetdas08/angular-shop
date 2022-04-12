import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { productModel } from '@rock-band-ng-store';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // private transSubject = new BehaviorSubject<TransactionEntry[]>([]);
  // transactions: Observable<
  //   TransactionEntry[]
  // > = this.transSubject.asObservable();
  // headers = new HttpHeaders().set(
  //   'Content-Type',
  //   'application/json; charset=UTF-8'
  // );

  envUrl = 'http://localhost:8080/products?_page=1&_limit=6';
  constructor(private http: HttpClient) {}

  loadProducts(): Observable<productModel.Product[]> {
    return this.http.get<productModel.Product[]>(this.envUrl).pipe(
      map((res) => res)
      // catchError(() => {
      //   return throwError('Error on loading products!');
      // })
    );
  }
}
