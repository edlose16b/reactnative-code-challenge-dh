export default interface Product {
  /**
   * id of the product
   */
  id: string;

  /**
   * date of the product when it was created
   */
  createdAt: Date;

  /**
   * name of the product
   */
  product: string;

  /**
   * points used in the product
   */
  points: number;

  /**
   * image of the product
   */
  image: string;

  /**
   * if it is [true] points are negative
   * if it is [false] points are positive
   */
  isRedemption: boolean;
}
