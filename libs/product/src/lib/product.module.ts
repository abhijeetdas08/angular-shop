import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductItemsComponent } from './product-items/product-items.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductsComponent } from './products/products.component';
import { RockUiModule } from '@rock-band-rock-ui';
import { productStore } from '@rock-band-ng-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ProductEffectServices } from './effect-services/product.effects.service';
import { ProductPipesModule } from './common/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: ProductsComponent }]),
    StoreModule.forFeature('products', productStore.productReducer),
    EffectsModule.forFeature([ProductEffectServices]),
    RockUiModule,
    ProductPipesModule,
  ],
  declarations: [
    ProductItemsComponent,
    ProductInfoComponent,
    ProductsComponent,
  ],
  exports: [ProductItemsComponent, ProductInfoComponent, ProductsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductModule {}
