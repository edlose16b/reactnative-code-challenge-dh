import React, {render, screen} from '@testing-library/react-native';
import ProductView from '../../../src/features/product/Product';
import {Product} from '../../../src/modules/products';
import {mockProduct} from '../../modules/products/core/mocks';
import {format} from 'date-fns';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe('Product', () => {
  let product: Product;
  // let component: RenderAPI;

  beforeEach(() => {
    product = mockProduct;
    render(<ProductView route={{params: {product}}} />);
  });

  describe('When product is redeption', () => {
    beforeEach(() => {
      product = {...mockProduct, isRedemption: true};
      render(<ProductView route={{params: {product}}} />);
    });
    test('should render a product page ', () => {
      screen.getByText(product.product);
      screen.getByText(
        'purchase_at' +
          ' ' +
          format(Date.parse(product.createdAt.toString()), 'dd MMMM, yyyy'),
      );
      screen.getByText(product.points + ' ' + 'points');

      screen.getByText('points_used_in_this_purchase');

      screen.getByText('accept');
      expect(mockNavigate).not.toBeCalled();
    });
  });

  describe('When product is not redeption', () => {
    beforeEach(() => {
      product = mockProduct;
      render(<ProductView route={{params: {product}}} />);
    });

    test('should render a product page when is not redeption', () => {
      screen.getByText(product.product);
      screen.getByText(
        'purchase_at' +
          ' ' +
          format(Date.parse(product.createdAt.toString()), 'dd MMMM, yyyy'),
      );
      screen.getByText(product.points + ' ' + 'points');

      screen.getByText('points_won_in_this_purchase');

      screen.getByText('accept');
      expect(mockNavigate).not.toBeCalled();
    });
  });
});
