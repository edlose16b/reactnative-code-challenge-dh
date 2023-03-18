import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {getProductsUseCase} from '../../dependency_injections';
import {
  FilterOptions,
  FilterOptionsType,
} from '../../features/home/contexts/FilterStateContext';
import {Product} from '../../modules/products';
import {filterByMonthAndYear} from '../../utils/dates';

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

      const {date, type} = action.payload;
      // filter by Date

      let newStateProducts: Product[] = state.memoryProducts;

      if (date != null) {
        newStateProducts = filterByMonthAndYear(
          action.payload.date!,
          state.memoryProducts,
        );
      }

      if (type != null) {
        newStateProducts = newStateProducts.filter(product => {
          switch (type) {
            case FilterOptionsType.ALL:
              return true;
            case FilterOptionsType.WON:
              return !product.isRedemption;
            case FilterOptionsType.redeemed:
              return product.isRedemption;
          }
        });
      }

      return {
        memoryProducts: state.memoryProducts,
        products: newStateProducts,
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
      state = {memoryProducts: [], products: []};
      return state;
    });
  },
});

export const {filterProducts} = productsSlice.actions;

export default productsSlice.reducer;
