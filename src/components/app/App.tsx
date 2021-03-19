import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CartProvider from '../../contexts/CartContext';
import { Header } from '../header';
import { useProducts } from '../../hooks/UseProducts';
import { Pagination } from '../pagination';
import { Products } from '../products';
import { Modal } from '../shared/modal';
import { Cart } from '../cart/Cart';
import { ICartList } from '../../interfaces';

export const App = () => {
  const {
    products,
    page,
    total,
    changePage,
    applyFilter,
    editProduct,
    deleteProduct,
    addProduct
  } = useProducts({ perPage: 5 });

  const [isCreateModalActive, setIsModalActive] = useState<boolean>(false);
  const toggleModal = useCallback(() => {
    setIsModalActive((prev: boolean) => !prev);
  }, []);
  const [cartList, setCartList] = useState<ICartList[]>([]);

  return (
    <Router>
      <CartProvider.Provider value={[cartList, setCartList]}>
        <Route path='/' exact>
          <Header toggleModal={toggleModal} applyFilter={applyFilter} />
          <Products products={products} editProduct={editProduct} deleteProduct={deleteProduct} />
          {isCreateModalActive && (
            <Modal toggleModal={toggleModal} handleSubmit={addProduct} title='Add product' />
          )}
          <Pagination page={page} pageCount={total} handleClick={changePage} />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
      </CartProvider.Provider>
    </Router>
  );
};
