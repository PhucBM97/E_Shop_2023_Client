import { Product } from "./Product.model";


export interface Promotion {
    promotionId: number;
    startDate: string | null;
    endDate: string | null;
    discount: number | null;
    gift: string | null;
    voucher: string | null;
    createdDate: string | null;
    updatedDate: string | null;
    products: Product[];
}