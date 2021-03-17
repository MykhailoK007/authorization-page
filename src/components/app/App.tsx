import React, { useCallback, useState } from 'react';
import { Header } from '../header';
import { useProducts } from '../../hooks/UseProducts';
import { Pagination } from '../pagination';
import { Products } from '../products';
import { Modal } from '../shared/modal';

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
  } = useProducts({ perPage: 2 });
  const [isCreateModalActive, setIsModalActive] = useState<boolean>(false);
  const toggleModal = useCallback(() => {
    setIsModalActive((prev: boolean) => !prev);
  }, []);
  return (
    <>
      <Header toggleModal={toggleModal} applyFilter={applyFilter} />
      <Products products={products} editProduct={editProduct} deleteProduct={deleteProduct} />
      {isCreateModalActive && (
        <Modal toggleModal={toggleModal} handleSubmit={addProduct} title='Add product' />
      )}
      <Pagination page={page} pageCount={total} handleClick={changePage} />
    </>
  );
};
