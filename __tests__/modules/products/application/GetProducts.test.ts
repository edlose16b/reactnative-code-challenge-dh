import {describe, expect, jest, test} from '@jest/globals';
import {GetProducts, Product} from '../../../../src/modules/products/';
import {ProductModel} from '../../../../src/modules/products/infraestructure/models/product_model';
import {mockProductJson} from '../core/mocks';

// jest.mock('../../../../src/modules/products/application/GetProducts');

// const mockedGetProducts = jest.mocked(GetProducts, {shallow: true});

const mockProductsRepository = {
  fetchAll: jest.fn(async (): Promise<Product[]> => {
    return [];
  }),
};
const getProductsService = new GetProducts(mockProductsRepository);
describe('GetProducts', () => {
  beforeEach(() => {
    mockProductsRepository.fetchAll.mockReset();
  });

  test('should get a list of products', async () => {
    // arrange
    mockProductsRepository.fetchAll = jest.fn(async () => {
      const product1 = ProductModel.fromJson(mockProductJson);

      return [product1];
    });

    // act
    const result = await getProductsService.handle();

    // assert
    expect(result).toHaveLength(1);
    expect(mockProductsRepository.fetchAll).toHaveBeenCalledTimes(1);
  });

  test('should get a empty list of products', async () => {
    mockProductsRepository.fetchAll = jest.fn(async () => {
      return [];
    });

    // act
    const result = await getProductsService.handle();

    // assert
    expect(result).toHaveLength(0);
    expect(mockProductsRepository.fetchAll).toHaveBeenCalledTimes(1);
  });
});
