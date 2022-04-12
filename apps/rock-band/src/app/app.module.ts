import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent, RockUiModule } from '@rock-band-rock-ui';
import { ProductModule, ProductsComponent } from '@rock-band-product';
import { CartComponent } from '@rock-band-cart';
import { cartStore, productStore } from '@rock-band-ng-store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    outlet: 'productOutlet',
  },
  {
    path: '',
    component: CartComponent,
    outlet: 'cartOutlet',
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
    RockUiModule,
    ProductModule,
    StoreModule.forRoot({
      cart: cartStore.cartReducer,
      products: productStore.productReducer,
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
