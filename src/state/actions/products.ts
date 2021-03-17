import * as Types from './types';

export const addProduct = (product: any) => ({ type: Types.ADD_PRODUCTS, payload: product });
export const removeProduct = (id: number) => ({ type: Types.REMOVE_PRODUCT, payload: id });
export const clearProductsList = () => ({ type: Types.CLEAR_PRODUCTS_LIST });
