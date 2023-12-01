import { Product } from "./Product";
import { Size } from "./Size";

export interface SizesSpecific {
    id: number;
    sizeId: number | null;
    productId: number | null;
    product: Product | null;
    size: Size | null;
}