import {ServerError} from '../../../core/failures';
import {GetProductsError} from '../core/errors';
import Product from '../domain/entities/product';
import ProductsRepository from '../domain/repositories/products_repository';

/**
 * Usecase for get all products
 */
export default class GetProducts {
  private productsRepository: ProductsRepository;

  constructor(productsRepository: ProductsRepository) {
    this.productsRepository = productsRepository;
  }

  handle(): Promise<Product[]> {
    try {
      return this.productsRepository.fetchAll();
    } catch (error) {
      if (error instanceof ServerError) {
        throw new GetProductsError();
      }

      throw error;
    }
  }
}
