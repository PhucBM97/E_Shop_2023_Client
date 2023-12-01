import { SizesSpecific } from "./SizesSpecific";

export interface Size {
    sizeId: number;
    number: string | null;
    details: string | null;
    createdDate: string | null;
    updatedDate: string | null;
    sizesSpecifics: SizesSpecific[];
}