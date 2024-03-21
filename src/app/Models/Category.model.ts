import { Product } from "./Product.model";

export interface Category {
    categoryId: number;
    name: string | null;
    parentCategoryId: number | null;
    description: string | null;
    createdDate: string | null;
    updatedDate: string | null;
    parentCategory: Category | null;
    inverseParentCategory: Category[];
    products: Product[];
}