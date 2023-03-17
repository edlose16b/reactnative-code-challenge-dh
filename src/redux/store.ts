import {configureStore} from '@reduxjs/toolkit';
import {ProductState, productsSlice} from './states/products';

export interface AppStore {
  products: ProductState;
}

export default configureStore<AppStore>({
  reducer: {
    products: productsSlice.reducer,
  },
});
