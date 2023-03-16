import Product from '../../domain/entities/product';

export class ProductModel implements Product {
  id!: string;
  createdAt!: Date;
  product!: string;
  points!: number;
  image!: string;
  isRedemption!: boolean;

  // constructor(
  //   id: string,
  //   product: string,
  //   points: number,
  //   image: string,
  //   isRedemption: boolean,
  //   createdAt: Date,
  // ) {
  //   this.id = id;
  //   this.product = product;
  //   this.points = points;
  //   this.image = image;
  //   this.isRedemption = isRedemption;
  //   this.createdAt = createdAt;
  // }

  static fromJson(json: any): ProductModel {
    json.isRedemption = json.is_redemption;
    return Object.assign(new ProductModel(), json);
  }
}
