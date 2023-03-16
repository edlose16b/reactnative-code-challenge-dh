import axios from 'axios';
import {ServerError} from '../../../../core/failures';
import Product from '../../domain/entities/product';
import {ProductModel} from '../models/product_model';
import ProductsDatasource from './products_datasource';

export class MockApiProductsDatasource implements ProductsDatasource {
  // env.url
  constructor() {}
  async fetchAll(): Promise<Product[]> {
    try {
      const response = await axios.get<[]>(
        'https://6222994f666291106a29f999.mockapi.io/api/v1/products',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );

      if (response.status !== 200) {
        throw new ServerError(response.statusText);
      }

      return response.data.map((product: any) =>
        ProductModel.fromJson(product),
      );
    } catch (error) {
      throw new ServerError('Server Failure');
    }
  }
}
