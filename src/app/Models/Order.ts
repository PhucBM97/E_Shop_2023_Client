import { Customer } from "./Customer";
import { OrderDetail } from "./OrderDetail";
import { Payment } from "./Payment";

export interface Order {
    orderId: number;
    paymentId: number | null;
    customerId: number | null;
    orderStatusCode: number | null;
    orderDate: string | null;
    total: number | null;
    createdDate: string | null;
    updatedDate: string | null;
    customer: Customer | null;
    payment: Payment | null;
    orderDetails: OrderDetail[];
}