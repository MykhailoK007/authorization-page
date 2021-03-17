import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, clearProductsList, removeProduct } from '../../state/actions/products';
import { allProductsSelector } from '../../state/selectors/products';

export const Content = () => {
  const prod = useSelector(allProductsSelector);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addProduct({ id: new Date(), name: 'new prod' }));
  };
  const handleRemove = (id: number) => {
    dispatch(removeProduct(id));
  };
  const handleClearList = () => {
    dispatch(clearProductsList());
  };
  return (
    <div>
      <div>
        {prod.map((el: any, index: number) => (
          <div key={index}>
            <div>
              <span>{el.name} </span>
              <button onClick={() => handleRemove(el.id)}> x </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleAdd}>Add something</button>
      </div>
      <div>
        <button onClick={handleClearList}>Clear All</button>
      </div>
    </div>
  );
};
