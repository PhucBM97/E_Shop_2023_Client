import { Product } from "./Product";

export interface Brand {
    brandId: number;
    brandName: string | null;
    createdDate: string | null;
    updatedDate: string | null;
    products: Product[];
}