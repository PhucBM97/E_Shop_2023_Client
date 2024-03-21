import { Product } from "./Product.model";

export interface Image {
    imageId: number;
    productId: number | null;
    path: string | null;
    product: Product | null;
}