import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { CartActions } from '../actions';
import { Product } from '../models/product.model';
import { CartProducts } from '../models/cart.model';

export interface CartState extends EntityState<Product> {
  cartError?: string;
}

export const cartAdapter: EntityAdapter<Product> = createEntityAdapter<Product>(
  {
    selectId: (cartProductEntry: Product) =>
      cartProductEntry.discount + '-' + cartProductEntry.name.replace(/ /g, ''),
  }
);

export const initialCartState = cartAdapter.getInitialState({
  cartError: '',
});

const hasListLoaded = (state: CartState) => {
  return {
    ...state,
    cartError: '',
  };
};

export const cartReducer = createReducer(
  initialCartState,
  on(
    CartActions.loadProductInCartSuccessFul,
    (state: CartState, action: CartProducts) => {
      return cartAdapter.addMany(action.data, hasListLoaded(state));
    }
  ),
  on(
    CartActions.loadProductInCartFailure,
    (state: CartState, { cartError }) => {
      return {
        ...state,
        cartError: cartError,
      };
    }
  ),
  on(
    CartActions.addBulkProductToCartSuccessFul,
    (state: CartState, { productItems }) => {
      return cartAdapter.addMany(productItems, {
        ...state,
        cartError: '',
      });
    }
  ),
  on(
    CartActions.addBulkProductToCartFailure,
    (state: CartState, { cartError }) => {
      return {
        ...state,
        cartError,
      };
    }
  ),
  on(
    CartActions.addProductToCartSuccessFul,
    (state: CartState, { productItem }) => {
      return cartAdapter.addOne(productItem, {
        ...state,
        cartError: '',
      });
    }
  ),
  on(CartActions.addProductToCartFailure, (state: CartState, { cartError }) => {
    return {
      ...state,
      cartError,
    };
  })
);

export const { selectAll } = cartAdapter.getSelectors();
