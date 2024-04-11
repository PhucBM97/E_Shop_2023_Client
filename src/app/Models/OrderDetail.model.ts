import { Order } from "./Order.model";
import { Product } from "./Product.model";

export class OrderDetail {
    orderDetailId?: number;
    productId?: number | null;
    orderId?: number | null;
    statusCode?: number | null;
    productQuantity?: number | null;
    productPrice?: number | null;
    productSubTotal?: number | null;
    otherOrderItemDetails?: string | null;
    order?: Order | null;
    product?: Product | null;
}