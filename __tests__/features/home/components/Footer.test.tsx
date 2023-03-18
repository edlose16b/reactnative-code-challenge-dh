import {fireEvent, screen} from '@testing-library/react-native';
import Footer from '../../../../src/features/home/components/Footer';
import FilterStateProvider from '../../../../src/features/home/contexts/FilterStateContext';

import React from 'react';
import {renderWithRedux} from '../../../render_util';

describe('[Footer]', () => {
  beforeEach(() => {
    renderWithRedux(
      <FilterStateProvider>
        <Footer />
      </FilterStateProvider>,
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
