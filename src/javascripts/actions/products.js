import { productsUrl } from 'javascripts/constants/urls';
import { ADD_TO_CART } from 'javascripts/constants/action-types';

export function getProducts() {
  return fetch(productsUrl);
}

export const addToCart = product => ({
  type: ADD_TO_CART,
  payload: product
});
