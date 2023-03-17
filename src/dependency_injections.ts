import {ApiProductsRepository, GetProducts} from './modules/products';
import {MockApiProductsDatasource} from './modules/products/infraestructure/datasources/mockapi_products_datasource';

const productsDatasource = new MockApiProductsDatasource();
const productsRepository = new ApiProductsRepository(productsDatasource);

// use cases

const getProductsUseCase = new GetProducts(productsRepository);

export {getProductsUseCase};
