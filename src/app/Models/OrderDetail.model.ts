import { Order } from "./Order.model";
import { Product } from "./Product.model";

export interface OrderDetail {
    orderDetailId: number;
    productId: number | null;
    orderId: number | null;
    statusCode: number | null;
    quantity: number | null;
    price: number | null;
    subTotal: number | null;
    otherOrderItemDetails: string | null;
    order: Order | null;
    product: Product | null;
}