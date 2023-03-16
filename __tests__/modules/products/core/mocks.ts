import {ProductModel} from '../../../../src/modules/products/infraestructure/models/product_model';

export const mockProductJson = {
  createdAt: '2022-12-09T06:34:25.607Z',
  product: 'Handmade Metal Shoes',
  points: 16434,
  image: 'https://loremflickr.com/640/480/transport',
  is_redemption: false,
  id: '1',
};

export const mockProduct = ProductModel.fromJson(mockProductJson);
