import { productsUrl } from 'javascripts/constants/urls';
import { ADD_TO_CART } from 'javascripts/constants/action-types';
import { UPDATE_CART_ITEM } from 'javascripts/constants/action-types';

export function getProducts() {
  return fetch(productsUrl);
}

export const updateCartItem = productInfo => ({
  type: UPDATE_CART_ITEM,
  id: productInfo.id,
  payload: {
    index: productInfo.index,
    quantity: productInfo.quantity,
    price: productInfo.price
  }
});

export const addToCart = product => ({
  type: ADD_TO_CART,
  id: product.id,
  payload: product
});
