export default interface Product {
  id: string;
  createdAt: Date;
  product: string;
  points: number;
  image: string;
  isRedemption: boolean;
}
