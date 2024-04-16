import { ProductDetailDTO } from "./ProductDetailDTO.model";

export interface ProductListDTO {
    products: ProductDetailDTO[];
    currentPage: number;
    pageCount: number;
}