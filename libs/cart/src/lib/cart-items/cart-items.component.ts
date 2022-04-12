import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appStore, cartSelectors, productModel } from '@rock-band-ng-store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'rock-band-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
})
export class CartItemsComponent implements OnInit {
  // isCartLoading = false;
  // cartProductItm$?: Observable<productModel.Product[]>;
  // cartItems?: productModel.Product[];
  // totalPayables: number = 0;

  constructor(private _store: Store<appStore.AppState>) {}

  ngOnInit(): void {
    // this.cartProductItm$ = this._store.select(cartSelectors.cartSelectAll).pipe(
    //   tap((res) => {
    //     this.isCartLoading = true;
    //     this.cartItems = res;
    //     this.getTotalPayables();
    //   })
    // );
  }

  getTotalPayables(): void {
    // this.cartItems?.forEach((itm) => {
    //   this.totalPayables += itm.price;
    // });
  }
}
