import { combineReducers, createStore } from 'redux';
import { Products } from './reducers/products';

const rootReducer = combineReducers({
  products: Products
});

export const store = createStore(rootReducer);
