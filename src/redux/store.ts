import {configureStore} from '@reduxjs/toolkit';
import {Product} from '../modules/products';
import {productsSlice} from './states/products';

export interface AppStore {
  products: Product[];
}

export default configureStore<AppStore>({
  reducer: {
    products: productsSlice.reducer,
  },
});
