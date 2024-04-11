import { Brand } from "./Brand.model";
import { CartItem } from "./CartItem.model";
import { Category } from "./Category.model";
import { ColorsSpecific } from "./ColorsSpecific.model";
import { Inventory } from "./Inventory.model";
import { OrderDetail } from "./OrderDetail.model";
import { Image } from "./Image.model";
import { Promotion } from "./Promotion.model";
import { SizesSpecific } from "./SizesSpecific.model";


export interface Product {
    productID: number;
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
