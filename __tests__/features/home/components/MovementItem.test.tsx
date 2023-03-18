import '@testing-library/jest-native';
import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import MovementItem from '../../../../src/features/home/components/MovementItem';
import {Product} from '../../../../src/modules/products';
import {mockProduct} from '../../../modules/products/core/mocks';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe('Given a Movement Item', () => {
  let product: Product;
  // let component: RenderAPI;

  beforeEach(() => {
    product = mockProduct;
    render(<MovementItem product={product} />);
  });

  test('should render a movement item', () => {
    screen.getByText(product.product);
    screen.getByText(product.points.toString());
    expect(mockNavigate).not.toBeCalled();
  });

  test('should navigate to Product Page when press Item', () => {
    var listItem = screen.getByTestId('product-item-' + product.id);
    fireEvent(listItem, 'click');

    expect(mockNavigate).toBeCalledTimes(1);
  });
});
