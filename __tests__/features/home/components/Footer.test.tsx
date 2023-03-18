import {fireEvent, render, screen} from '@testing-library/react-native';
import Footer from '../../../../src/features/home/components/Footer';
import FilterStateProvider from '../../../../src/features/home/contexts/FilterStateContext';

import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './../../../../src/redux/store';

describe('[Footer]', () => {
  beforeEach(() => {
    render(
      <Provider store={configureStore}>
        <FilterStateProvider>
          <Footer />
        </FilterStateProvider>
      </Provider>,
      {},
    );
  });

  test('should render a initial Footer with 2 filter buttons', () => {
    screen.getByText('redeemed');
    screen.getByText('won');
    expect(() => screen.getByText('all')).toThrow();
  });

  test('should render a simple button when click a filter option', () => {
    const button = screen.getByText('redeemed');
    fireEvent(button, 'click');

    // exists button all
    screen.getByText('all');
    // not exists button redeemed
    expect(() => screen.getByText('redeemed')).toThrow();
    expect(() => screen.getByText('won')).toThrow();
  });
});
