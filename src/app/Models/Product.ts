import { Brand } from "./Brand";
import { CartItem } from "./CartItem";
import { Category } from "./Category";
import { ColorsSpecific } from "./ColorsSpecific";
import { Inventory } from "./Inventory";
import { OrderDetail } from "./OrderDetail";
import { Promotion } from "./Promotion";
import { SizesSpecific } from "./SizesSpecific";


export interface Product {
    productId: number;
    promotionId: number | null;
    categoryId: number | null;
    inventoryId: number | null;
    brandId: number | null;
    productName: string | null;
    price: number | null;
    stock: boolean | null;
    imageUrl: string | null;
    description: string | null;
    otherProductDetails: string | null;
    createdDate: string | null;
    updatedDate: string | null;
    brand: Brand | null;
    category: Category | null;
    inventory: Inventory | null;
    promotion: Promotion | null;
    cartItems: CartItem[];
    colorsSpecifics: ColorsSpecific[];
    //images: ProductImage[];
    orderDetails: OrderDetail[];
    sizesSpecifics: SizesSpecific[];
}