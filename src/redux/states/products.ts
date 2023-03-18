import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {getProductsUseCase} from '../../dependency_injections';
import {FilterOptions} from '../../features/home/contexts/FilterStateContext';
import {Product} from '../../modules/products';

export type ProductState = {
  memoryProducts: Product[] | null;
  products: Product[];
};

const initialState: ProductState = {
  memoryProducts: null,
  products: [],
};

export const fetchProducts = createAsyncThunk(
  'products/get',
  async (__, _): Promise<Product[]> => {
    const products = await getProductsUseCase.handle();
    return products;
  },
);

export const productsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    filterProducts: (state, action: PayloadAction<FilterOptions>) => {
      if (state.memoryProducts == null) {
        return;
      }

      return {
        memoryProducts: state.memoryProducts,
        products: state.memoryProducts.filter(product => {
          switch (action.payload) {
            case FilterOptions.ALL:
              return true;
            case FilterOptions.WON:
              return !product.isRedemption;
            case FilterOptions.redeemed:
              return product.isRedemption;
          }
        }),
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, (state, _) => {
      state = {memoryProducts: null, products: []};
      return state;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state = {
        memoryProducts: action.payload,
        products: action.payload,
      };

      return state;
    });
    builder.addCase(fetchProducts.rejected, (state, _) => {
      console.log('====================================');
      console.log('ERROR REJECTING PRODUCT');
      console.log('====================================');
      state = {memoryProducts: [], products: []};
      return state;
    });
  },
});

export const {filterProducts} = productsSlice.actions;

export default productsSlice.reducer;
