import { Customer } from "./Customer.model";
import { OrderDetail } from "./OrderDetail.model";
import { Payment } from "./Payment.model";

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