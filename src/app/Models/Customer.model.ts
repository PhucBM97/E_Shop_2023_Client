import { Cart } from "./Cart.model";
import { Order } from "./Order.model";

export interface Customer {
    customerId: number;
    fullName: string | null;
    email: string | null;
    password: string | null;
    gender: boolean | null;
    dob: string | null;
    phone: string | null;
    address: string | null;
    isActive: boolean | null;
    createdDate: string | null;
    updatedDate: string | null;
    cart: Cart | null;
    orders: Order[];
}