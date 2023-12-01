import { CartItem } from "./CartItem";
import { Customer } from "./Customer";

export interface Cart {
    cartId: number;
    customerId: number | null;
    status: string | null;
    createdDate: string | null;
    updatedDate: string | null;
    customer: Customer | null;
    cartItems: CartItem[];
}