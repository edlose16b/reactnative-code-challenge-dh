import {describe, expect, test} from '@jest/globals';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {MockApiProductsDatasource} from '../../../../src/modules/products/infraestructure/datasources/mockapi_products_datasource';
import {mockProductJson} from '../core/mocks';
import {ServerError} from '../../../../src/core/failures';

const uri = 'https://6222994f666291106a29f999.mockapi.io/api/v1/products';
describe('MockApi Products Datasource', () => {
  let mock: MockAdapter;
  let mockApiProductsDatasource: MockApiProductsDatasource;

  beforeAll(() => {
    mockApiProductsDatasource = new MockApiProductsDatasource();
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  test('should get a list of products', async () => {
    // arrange
    const products = [mockProductJson, mockProductJson];

    mock.onGet(uri).reply(200, products);

    // act
    const response = await mockApiProductsDatasource.fetchAll();

    //assert
    expect(response.length).toBeGreaterThan(0);
    expect(response[0].id).toBe(mockProductJson.id);
  });

  test('should throws a [ServerError]', async () => {
    // arrange

    mock.onGet(uri).reply(500, []);

    try {
      // act
      await mockApiProductsDatasource.fetchAll();
    } catch (error) {
      //assert
      expect(error).toBeInstanceOf(ServerError);
    }
  });
});
