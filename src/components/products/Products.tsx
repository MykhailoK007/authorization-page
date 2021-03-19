import React, { useState, useCallback } from 'react';
import { Product, ICartProd } from '../../interfaces';
import { Modal } from '../shared/modal';
import css from './Products.module.scss';

interface ProductsProps {
  products: Product[];
  editProduct?(prod: Partial<Product>): void;
  deleteProduct(id: number): void;
  cartList: ICartProd[];
  addProductToCart(val: ICartProd): void;
}
export const Products = ({ products, addProductToCart, deleteProduct, editProduct }: ProductsProps) => {
  const [isEditModalActive, setIsEditModalActive] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<number | null>(null);
  const toggleModal = useCallback(() => {
    setIsEditModalActive((prev: boolean) => !prev);
  }, []);
  const handleEditBtn = (id: number): void => {
    setCurrentProduct(id);
    toggleModal();
  };

  return (
    <div className={css.productsWrapper}>
      {products.map(product => (
        <div key={product.id} className={css.product}>
          <div className={css.productHeader}>
            <button
              onClick={() => {
                addProductToCart(product);
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
