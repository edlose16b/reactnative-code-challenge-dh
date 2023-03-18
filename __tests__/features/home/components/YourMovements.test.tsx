import {render, screen} from '@testing-library/react-native';
import FilterStateProvider from '../../../../src/features/home/contexts/FilterStateContext';

import React from 'react';
import YourMovements from '../../../../src/features/home/components/YourMovements';
import configureStore from './../../../../src/redux/store';
import * as Redux from 'react-redux';

describe('[YourMovements]', () => {
  beforeEach(() => {
    render(
      <Redux.Provider store={configureStore}>
        <FilterStateProvider>
          <YourMovements />
        </FilterStateProvider>
      </Redux.Provider>,
      {},
    );
  });

  test('should render a initial component', () => {
    screen.getByText('your_movements');
    screen.getByTestId('movement-loader-id');
  });
});
