import Product from '../entities/product';

export default interface ProductsRepository {
  fetchAll(): Promise<Product[]>;
}
