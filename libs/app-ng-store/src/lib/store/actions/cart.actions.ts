import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const loadProductInCart = createAction(
  '[Load Cart Resolver] Load Products'
);

export const loadProductInCartSuccessFul = createAction(
  '[Load Cart Effect] Loaded Selected Products',
  props<{ data: Product[] }>()
);

export const loadProductInCartFailure = createAction(
  '[Load Cart Effect] Loading Failed',
  props<{ cartError: string }>()
);

export const addBulkProductToCartSuccessFul = createAction(
  '[Add Bulk Product to Cart] Add Products Successful',
  props<{ productItems: Product[] }>()
);

export const addBulkProductToCartFailure = createAction(
  '[Add Bulk Product to Cart] Add Products Failure',
  props<{ cartError: string }>()
);

export const addProductToCartSuccessFul = createAction(
  '[Add Product to Cart] Add Product Successful',
  props<{ productItem: Product }>()
);

export const addProductToCartFailure = createAction(
  '[Add Product to Cart] Add Product Failure',
  props<{ cartError: string }>()
);
