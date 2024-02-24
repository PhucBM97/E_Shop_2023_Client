import { Brand } from "./Brand";
import { CartItem } from "./CartItem";
import { Category } from "./Category";
import { ColorsSpecific } from "./ColorsSpecific";
import { Inventory } from "./Inventory";
import { OrderDetail } from "./OrderDetail";
import { Image } from "./Image";
import { Promotion } from "./Promotion";
import { SizesSpecific } from "./SizesSpecific";


export interface Product {
    productId: number;
    promotionId: number | null;
    categoryId: number | null;
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
    promotion: Promotion | null;
    inventory: Inventory | null;
    cartItems: CartItem[];
    colorsSpecifics: ColorsSpecific[];
    images: Image[];
    orderDetails: OrderDetail[];
    sizesSpecifics: SizesSpecific[];
}
