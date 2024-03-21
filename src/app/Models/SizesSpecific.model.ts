import { Product } from "./Product.model";
import { Size } from "./Size.model";

export interface SizesSpecific {
    id: number;
    sizeId: number | null;
    productId: number | null;
    product: Product | null;
    size: Size | null;
}