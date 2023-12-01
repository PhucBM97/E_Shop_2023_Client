import { Color } from "./Color";
import { Product } from "./Product";

export interface ColorsSpecific {
    id: number;
    colorId: number | null;
    productId: number | null;
    color: Color | null;
    product: Product | null;
}