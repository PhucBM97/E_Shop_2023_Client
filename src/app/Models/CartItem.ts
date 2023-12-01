import { Cart } from "./Cart";
import { Product } from "./Product";

export interface CartItem {
    cartItemId: number;
    cartId: number | null;
    productId: number;
    quantity: number | null;
    total: number | null;
    cart: Cart | null;
    product: Product;
}