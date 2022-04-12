import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { CartActions, productModel } from '@rock-band-ng-store';
import { CartService } from '../services/cart.service';

@Injectable({
  providedIn: 'root',
})
export class CartEffectServices {
  constructor(private _actions: Actions, private _httpCart: CartService) {}

  // dispatch Load Cart and on success http call dispatch next successful action
  loadCartProductsEffect = createEffect(() => {
    console.log('cart effect========');
    return this._actions.pipe(
      ofType(CartActions.loadProductInCart),
      // ConcatMap for call API once
      concatMap((): Observable<productModel.Product[]> => {
        return this._httpCart.loadCartProducts();
      }),
      map((prods: productModel.Product[]) =>
        CartActions.loadProductInCartSuccessFul({ data: prods })
      ),
      catchError(() => {
        console.log('Here Error!');
        return of(
          CartActions.loadProductInCartFailure({
            cartError: 'Error on loading products!',
          })
        );
      })
    );
  });
}
