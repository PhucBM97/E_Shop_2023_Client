import { Product } from "./Product.model";

export interface Brand {
    brandId: number;
    brandName: string | null;
    createdDate: string | null;
    updatedDate: string | null;
    products: Product[];
}