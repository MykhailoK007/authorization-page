import React from 'react';
import { ICartProd } from '../../interfaces';
import css from './Cart.module.scss';

interface CartListProps {
  cartList: ICartProd[];
  handleRemoveProduct(val: number): void;
}
export const Cart = ({ cartList, handleRemoveProduct }: CartListProps) => {
  const getTotalPrice = (): number =>
    cartList.reduce((prev: number, current: ICartProd) => prev + current.price * current.count!, 0);
  return (
    <div>
      <div className={css.cart}>
        <div className={css.cartHeader}>Cart</div>
        {!cartList.length ? (
          <div className={css.message}>List is empty</div>
        ) : (
          <>
            <div className={css.cartBody}>
              {cartList.map((product: ICartProd) => (
                <div className={css.product}>
                  <div className={css.sideWrapper}>
                    <span>{product.name} </span>
                    <span>{product.price} UAH</span>
                  </div>
                  <div className={css.sideWrapper}>
                    {product.count && <span>Count: {product.count}</span>}
                    <button onClick={() => handleRemoveProduct(product.id)}>X</button>
                  </div>
                </div>
              ))}
            </div>
            <div className={css.cartFooter}>Total: {getTotalPrice()}</div>
          </>
        )}
      </div>
    </div>
  );
};
