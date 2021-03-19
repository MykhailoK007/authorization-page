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

export interface ICartProd extends Product {
  count?: number;
}

export interface ICartContextProps {
  cartList: ICartProd[];
  setCartList(val: ICartProd[]): void;
}
