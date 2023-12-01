import { Product } from "./Product";

export interface Inventory {
    inventoryId: number;
    quantity: number | null;
    createdDate: string | null;
    updatedDate: string | null;
    product: Product | null;
}