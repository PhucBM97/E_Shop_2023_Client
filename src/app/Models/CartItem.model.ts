import { Cart } from "./Cart.model";
import { Product } from "./Product.model";

export interface CartItem {
    cartItemId: number;
    cartId: number | null;
    productId: number;
    quantity: number | null;
    total: number | null;
    cart: Cart | null;
    product: Product;
}