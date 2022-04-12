import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  appStore,
  CartActions,
  productModel,
  cartSelectors,
} from '@rock-band-ng-store';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'rock-band-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  isCartLoading = true;
  cartItm$?: Observable<productModel.Product[]>;

  constructor(private _store: Store<appStore.AppState>) {
    // const productItems = [
    //   {
    //       id: 213,
    //       name: 'Laptop Stand',
    //       price: 45,
    //   },
    //   {
    //       id: 321,
    //       name: 'Washing Machine',
    //       price: 321,
    //   },
    //   {
    //       id: 111,
    //       name: 'Air Cooler',
    //       price: 545,
    //   },
    //   {
    //       id: 432,
    //       name: 'Iron Board',
    //       price: 151,
    //   },
    // ];
    // this._store.dispatch(
    //   CartActions.addBulkProductToCartSuccessFul({ productItems })
    // );
  }
  ngOnInit(): void {
    console.log('cart===========');
    this._store.dispatch(CartActions.loadProductInCart());

    this.cartItm$ = this._store.select(cartSelectors.cartSelectAll).pipe(
      tap((res) => {
        if (res.length) {
          console.log('cart===========', res);
          this.isCartLoading = false;
        }
      })
    );
  }
}
