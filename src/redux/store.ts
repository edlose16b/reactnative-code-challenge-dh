import {configureStore} from '@reduxjs/toolkit';
import {ProductState, productsSlice} from './states/products';

export interface AppStore {
  products: ProductState;
}

const createStore = (state?: AppStore | undefined) => {
  return configureStore<AppStore>({
    preloadedState: state,
    reducer: {
      products: productsSlice.reducer,
    },
  });
};
export default createStore;
