import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {Product} from '../../modules/products';
import {getProductsUseCase} from '../../dependency_injections';

const initialState: Product[] = [];

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
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state = [...state, ...action.payload];
      return state;
    });
    builder.addCase(fetchProducts.rejected, (state, _) => {
      state = [];
      return state;
    });
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
