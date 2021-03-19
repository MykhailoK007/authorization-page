import { useCallback, useMemo, useState } from 'react';
import { Product, IFilterOptions } from '../interfaces';

interface IUseProducts {
  initialProducts?: Product[];
  perPage: number;
}

const data: Product[] = [
  {
    id: 1,
    name: 'apple',
    price: 10
  },
  {
    id: 2,
    name: 'tomato',
    price: 15
  },
  {
    id: 3,
    name: 'cherry',
    price: 20
  },
  {
    id: 4,
    name: 'cucumber',
    price: 4
  },
  {
    id: 5,
    name: 'kiwi',
    price: 9
  },
  {
    id: 6,
    name: 'guava',
    price: 8
  },
  {
    id: 7,
    name: 'lemon',
    price: 10
  },
  {
    id: 8,
    name: 'grape',
    price: 16
  },
  {
    id: 9,
    name: 'fig',
    price: 12
  }
];

export const useProducts = ({ initialProducts = data, perPage }: IUseProducts) => {
  const [productList, setProductList] = useState<Product[]>(initialProducts);
  const [page, setPage] = useState<number>(1);
  const [filterOption, setFilterOption] = useState<IFilterOptions | null>(null);

  const { products, total } = useMemo(() => {
    let localList = productList;

    if (filterOption) {
      filterOption.name && (localList = localList.filter(el => el.name === filterOption.name!));
      filterOption.priceMore && (localList = localList.filter(el => el.price > filterOption.priceMore!));
      filterOption.priceLess && (localList = localList.filter(el => el.price < filterOption.priceLess!));
    }
    let products = localList.slice((page - 1) * perPage, page * perPage);
    let total = Math.ceil(localList.length / perPage);
    return { products, total };
  }, [productList, page, perPage, filterOption]);
  const changePage = useCallback(
    page => {
      setPage(page);
    },
    [setPage]
  );

  const applyFilter = useCallback(
    (filterOption: IFilterOptions): void => {
      setFilterOption(filterOption);
    },
    [setFilterOption]
  );

  const editProduct = (prod: Product) => {
    setProductList(productList.map(el => (el.id === prod.id ? Object.assign(el, prod) : el)));
  };
  const deleteProduct = (id: number) => {
    setProductList(prev => prev.filter(el => el.id !== id));
  };
  const addProduct = (prod: Pick<Product, 'name' | 'price'>) => {
    setProductList(prev => [...prev, { ...prod, id: Math.random() * 1000 }]);
  };

  return {
    products,
    total,
    changePage,
    page,
    applyFilter,
    editProduct,
    deleteProduct,
    addProduct
  };
};
