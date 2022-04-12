import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartComponent } from './cart/cart.component';
import { RockUiModule } from '@rock-band-rock-ui';
import { StoreModule } from '@ngrx/store';
import { cartStore } from '@rock-band-ng-store';
import { CartEffectServices } from './effect-services/cart.effects.service';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: CartComponent }]),
    RockUiModule,
    StoreModule.forFeature('cart', cartStore.cartReducer),
    EffectsModule.forFeature([CartEffectServices]),
  ],
  declarations: [CartItemsComponent, CartComponent],
  exports: [CartItemsComponent, CartComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CartModule {}
