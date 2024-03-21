import { Color } from "./Color.model";
import { Product } from "./Product.model";

export interface ColorsSpecific {
    id: number;
    colorId: number | null;
    productId: number | null;
    color: Color | null;
    product: Product | null;
}