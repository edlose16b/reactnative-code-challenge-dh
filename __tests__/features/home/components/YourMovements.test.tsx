import {screen} from '@testing-library/react-native';
import FilterStateProvider from '../../../../src/features/home/contexts/FilterStateContext';

import React from 'react';
import YourMovements from '../../../../src/features/home/components/YourMovements';
import {renderWithRedux} from '../../../render_util';
import {mockProduct} from '../../../modules/products/core/mocks';

describe('[YourMovements]', () => {
  describe('when has pending data', () => {
    beforeEach(() => {
      renderWithRedux(
        <FilterStateProvider>
          <YourMovements />
        </FilterStateProvider>,
      );
    });
    test('should render a initial component', () => {
      screen.getByText('your_movements');
      screen.getByTestId('movement-loader-id');
    });
  });

  describe('when data is loaded but it is empty', () => {
    beforeEach(() => {
      renderWithRedux(
        <FilterStateProvider>
          <YourMovements />
        </FilterStateProvider>,
        {products: {memoryProducts: [], products: []}},
      );
    });
    test('should render a list empty of products', () => {
      screen.getByText('your_movements');
      expect(() => screen.getByTestId('movement-loader-id')).toThrow();
      screen.getByTestId('products-lists-id');
    });
  });

  describe('when data is loaded and it is not empty', () => {
    beforeEach(() => {
      renderWithRedux(
        <FilterStateProvider>
          <YourMovements />
        </FilterStateProvider>,
        {products: {memoryProducts: [mockProduct], products: [mockProduct]}},
      );
    });
    test('should render a list of products', () => {
      screen.getByText('your_movements');
      expect(() => screen.getByTestId('movement-loader-id')).toThrow();
      const flatList = screen.getByTestId('products-lists-id');
      expect(flatList.children).toHaveLength(1);
    });
  });
});
