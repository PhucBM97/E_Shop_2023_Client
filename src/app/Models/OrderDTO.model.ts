import { OrderDetail } from "./OrderDetail.model";

export class OrderDTO {
    customerName?: string;
    customerEmail?: string;
    customerPhone?: string;
    customerAddress?: string;
    orderDelivery?: string;
    orderTotal?: number;
    orderDetail?: OrderDetail[];
}