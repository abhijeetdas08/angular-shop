import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { productModel } from '@rock-band-ng-store';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // private transSubject = new BehaviorSubject<TransactionEntry[]>([]);
  // transactions: Observable<
  //   TransactionEntry[]
  // > = this.transSubject.asObservable();
  // headers = new HttpHeaders().set(
  //   'Content-Type',
  //   'application/json; charset=UTF-8'
  // );

  envUrl = 'http://localhost:8080/carts';
  constructor(private http: HttpClient) {}

  loadCartProducts(): Observable<productModel.Product[]> {
    console.log('here===  ');
    return this.http.get<productModel.Product[]>(this.envUrl).pipe(
      map((res) => res)
      // catchError(() => {
      //   return throwError('Error on loading products!');
      // })
    );
  }
}
