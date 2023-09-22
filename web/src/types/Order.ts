import { OrderStatus } from "./OrderStatus";
import { Product } from "./Product";

export interface Order {
  _id: string;
  table: number;
  status: OrderStatus;
  products: {
    product: Product;
    quantity: number;
    _id: string;
  }[]
}
