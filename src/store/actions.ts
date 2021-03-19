import { ICartProd } from '../interfaces';
import * as Types from './types';

export const addProductToCart = (product: ICartProd) => ({
  type: Types.ADD_PRODUCT,
  payload: product
});
export const removeProductFromCart = (id: number) => ({
  type: Types.REMOVE_PRODUCT,
  payload: id
});
