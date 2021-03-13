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
