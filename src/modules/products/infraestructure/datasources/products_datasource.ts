import Product from '../../domain/entities/product';

export default interface ProductsDatasource {
  fetchAll(): Promise<Product[]>;
}
