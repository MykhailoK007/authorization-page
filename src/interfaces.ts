export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface IFilterOptions {
  name?: string;
  priceMore?: number;
  priceLess?: number;
}

export interface ICartList extends Product {
  count?: number;
}

export interface ICartContextProps {
  cartList: ICartList[];
  setCartList(val: ICartList[]): void;
}
