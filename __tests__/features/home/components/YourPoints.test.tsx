import {screen} from '@testing-library/react-native';
import FilterStateProvider from '../../../../src/features/home/contexts/FilterStateContext';

import React from 'react';
import YourPoints from '../../../../src/features/home/components/YourPoints';
import {renderWithRedux} from '../../../render_util';
import {mockProduct} from '../../../modules/products/core/mocks';

describe('[YourPoints]', () => {
  describe('when has pending data', () => {
    beforeEach(() => {
      renderWithRedux(
        <FilterStateProvider>
          <YourPoints />
        </FilterStateProvider>,
      );
    });
    test('should render a card with empty points', () => {
      screen.getByText('0.00');
    });
  });

  describe('when data is loaded but it is empty', () => {
    beforeEach(() => {
      renderWithRedux(
        <FilterStateProvider>
          <YourPoints />
        </FilterStateProvider>,
        {products: {memoryProducts: [], products: []}},
      );
    });
    test('should render a list empty of products', () => {
      screen.getByText('0.00');
    });
  });

  describe('when data is loaded and it is not empty', () => {
    beforeEach(() => {
      renderWithRedux(
        <FilterStateProvider>
          <YourPoints />
        </FilterStateProvider>,
        {products: {memoryProducts: [mockProduct], products: [mockProduct]}},
      );
    });
    test('should render a list of products', () => {
      const points = mockProduct.points
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,');
      screen.getByText(points);
    });
  });
});
