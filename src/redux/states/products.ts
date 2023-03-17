import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {Product} from '../../modules/products';
import {getProductsUseCase} from '../../dependency_injections';
import {FilterOptions} from '../../features/home/contexts/FilterStateContext';

export type ProductState = {
  memoryProducts: Product[];
  products: Product[];
};

const initialState: ProductState = {
  memoryProducts: [],
  products: [],
};

export const fetchProducts = createAsyncThunk(
  'products/get',
  async (__, _): Promise<Product[]> => {
    const products = await getProductsUseCase.handle();
    console.log('products total: ', products.length);
    return products;
  },
);

export const productsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    filterProducts: (state, action: PayloadAction<FilterOptions>) => {
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
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state = {
        memoryProducts: action.payload,
        products: action.payload,
      };

      return state;
    });
    builder.addCase(fetchProducts.rejected, (state, _) => {
      state = {memoryProducts: [], products: []};
      return state;
    });
  },
});

export const {filterProducts} = productsSlice.actions;

export default productsSlice.reducer;
