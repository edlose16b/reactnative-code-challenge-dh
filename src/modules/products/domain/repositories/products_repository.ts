import Product from '../entities/product';

export default interface ProductsRepository {
  /**
   * Fetch all products
   */
  fetchAll(): Promise<Product[]>;
}
