import React, { useContext } from 'react';
// import {CartConsumer} from '../../contexts/CartContext';
import CartProvider from '../../contexts/CartContext';
import { ICartList } from '../../interfaces';
import css from './Cart.module.scss';

export const Cart = () => {
  const [cartList, setCartList] = useContext(CartProvider);
  const handleClick = (id: number) => setCartList(cartList.filter((prod: ICartList) => prod.id !== id));
  const getTotalPrice = (): number =>
    cartList.reduce((prev: number, current: ICartList) => prev + current.price * current.count!, 0);
  return (
    <div>
      <div className={css.cart}>
        <div className={css.cartHeader}>Cart</div>
        {!cartList.length ? (
          <div className={css.message}>List is empty</div>
        ) : (
          <>
            <div className={css.cartBody}>
              {cartList.map((product: ICartList) => (
                <div className={css.product}>
                  <div className={css.sideWrapper}>
                    <span>{product.name} </span>
                    <span>{product.price} UAH</span>
                  </div>
                  <div className={css.sideWrapper}>
                    {product.count && <span>Count: {product.count}</span>}
                    <button onClick={handleClick.bind(null, product.id)}>X</button>
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
