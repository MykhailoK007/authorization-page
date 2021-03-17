import * as Types from '../actions/types';

const initialState = {
  products: [{ id: 1, name: 'apple' }]
};

export const Products = (state = initialState, action: any) => {
  switch (action.type) {
    case Types.ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case Types.REMOVE_PRODUCT:
      return {
        products: [...state.products.filter(prod => prod.id !== action.payload)]
      };
    case Types.CLEAR_PRODUCTS_LIST:
      return {
        products: []
      };

    default:
      return state;
  }
};
