import React, { useState, useCallback, useContext } from 'react';
import CartProvider from '../../contexts/CartContext';
import { Product, ICartList } from '../../interfaces';
import { Modal } from '../shared/modal';
import css from './Products.module.scss';

interface ProductsProps {
  products: Product[];
  editProduct?(prod: Partial<Product>): void;
  deleteProduct(id: number): void;
}
export const Products = ({ products, deleteProduct, editProduct }: ProductsProps) => {
  const [isEditModalActive, setIsEditModalActive] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<number | null>(null);
  const [cartList, setCartList] = useContext(CartProvider);
  const toggleModal = useCallback(() => {
    setIsEditModalActive((prev: boolean) => !prev);
  }, []);
  const handleEditBtn = (id: number): void => {
    setCurrentProduct(id);
    toggleModal();
  };
  const handleAddToCart = (product: ICartList): void => {
    cartList.filter((prod: ICartList) => prod.id === product.id).length
      ? setCartList(
          cartList.map((prod: ICartList) =>
            prod.id === product.id ? { ...prod, count: prod.count! + 1 } : prod
          )
        )
      : setCartList([...cartList, { ...product, count: 1 }]);
  };
  return (
    <div className={css.productsWrapper}>
      {products.map(product => (
        <div key={product.id} className={css.product}>
          <div className={css.productHeader}>
            <button
              onClick={() => {
                handleAddToCart(product);
              }}
            >
              +
            </button>
            <button onClick={handleEditBtn.bind(null, product.id)}>Edit</button>
            <button onClick={deleteProduct.bind(null, product.id)}>X</button>
          </div>
          <div>{product.name}</div>
          <div> Price: {product.price}</div>
        </div>
      ))}
      {isEditModalActive && (
        <Modal
          toggleModal={toggleModal}
          handleSubmit={editProduct!}
          title='Edit product'
          id={currentProduct!}
        />
      )}
    </div>
  );
};
