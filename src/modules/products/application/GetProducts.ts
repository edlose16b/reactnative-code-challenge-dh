import {ServerError} from '../../../core/failures';
import {GetProductsError} from '../core/errors';
import Product from '../domain/entities/product';
import ProductsRepository from '../domain/repositories/products_repository';

export default class GetProducts {
  private productsRepository: ProductsRepository;

  constructor(productsRepository: ProductsRepository) {
    this.productsRepository = productsRepository;
  }

  handle(): Promise<Product[]> {
    try {
      return this.productsRepository.fetchAll();
    } catch (error) {
      console.log('====================================');
      console.log('Q es error', error);
      console.log('====================================');
      if (error instanceof ServerError) {
        console.log('throw GetProductsError');
        throw new GetProductsError();
      }

      throw error;
    }
  }
}
