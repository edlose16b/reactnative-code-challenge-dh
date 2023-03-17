import Product from '../../domain/entities/product';
import ProductsRepository from '../../domain/repositories/products_repository';
import ProductsDatasource from '../datasources/products_datasource';

export default class ApiProductsRepository implements ProductsRepository {
  private datasource!: ProductsDatasource;
  constructor(datasource: ProductsDatasource) {
    this.datasource = datasource;
  }

  async fetchAll(): Promise<Product[]> {
    return this.datasource.fetchAll();
  }
}
