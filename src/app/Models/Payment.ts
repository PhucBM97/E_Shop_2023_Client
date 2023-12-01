import { Order } from "./Order";

export interface Payment {
    paymentId: number;
    paymentName: string | null;
    allowed: boolean | null;
    createdDate: string | null;
    updateDate: string | null;
    orders: Order[];
}