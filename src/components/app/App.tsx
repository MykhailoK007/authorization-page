import React, { useCallback, useReducer, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from '../header';
import { useProducts } from '../../hooks/UseProducts';
import { Pagination } from '../pagination';
import { Products } from '../products';
import { Modal } from '../shared/modal';
import { Cart } from '../cart/Cart';
import { initialState, reducer } from '../../store/reducer';
import { addProductToCart, removeProductFromCart } from '../../store/actions';
import { ICartProd } from '../../interfaces';

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
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleAddProduct = (product: ICartProd) => {
    dispatch(addProductToCart(product));
  };
  const handleRemoveProductFromCart = (id: number) => {
    dispatch(removeProductFromCart(id));
  };
  return (
    <Router>
      <Route path='/' exact>
        <Header toggleModal={toggleModal} applyFilter={applyFilter} />
        <Products
          products={products}
          editProduct={editProduct}
          deleteProduct={deleteProduct}
          cartList={state.cartList}
          addProductToCart={handleAddProduct}
        />
        {isCreateModalActive && (
          <Modal toggleModal={toggleModal} handleSubmit={addProduct} title='Add product' />
        )}
        <Pagination page={page} pageCount={total} handleClick={changePage} />
      </Route>
      <Route path='/cart'>
        <Cart cartList={state.cartList} handleRemoveProduct={handleRemoveProductFromCart} />
      </Route>
    </Router>
  );
};
