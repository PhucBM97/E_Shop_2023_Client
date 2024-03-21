import { CartItem } from "./CartItem.model";
import { Customer } from "./Customer.model";

export interface Cart {
    cartId: number;
    customerId: number | null;
    status: string | null;
    createdDate: string | null;
    updatedDate: string | null;
    customer: Customer | null;
    cartItems: CartItem[];
}