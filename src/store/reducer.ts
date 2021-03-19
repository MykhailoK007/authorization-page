import { ICartProd } from '../interfaces';
import * as Types from './types';

interface InitialStateProps {
  cartList: ICartProd[];
}

export const initialState: InitialStateProps = {
  cartList: []
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case Types.ADD_PRODUCT:
      const isAlreadyExist = state.cartList.filter((prod: ICartProd) => action.payload.id === prod.id).length;
      return {
        cartList: isAlreadyExist
          ? state.cartList.map((prod: ICartProd) =>
              prod.id === action.payload.id ? { ...prod, count: prod.count! + 1 } : prod
            )
          : [...state.cartList, { ...action.payload, count: 1 }]
      };
    case Types.REMOVE_PRODUCT:
      return {
        cartList: state.cartList.filter((prod: ICartProd) => prod.id !== action.payload)
      };
    default:
      return state;
  }
};
