import { Product } from "./Product";

export interface Inventory {
    inventoryProsId: number;
    quantity: number | null;
    createdDate: string | null;
    updatedDate: string | null;
    inventoryPros: Product;
}
