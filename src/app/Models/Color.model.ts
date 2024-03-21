import { ColorsSpecific } from "./ColorsSpecific.model";

export interface Color {
    colorId: number;
    colorName: string | null;
    createdDate: string | null;
    updatedDate: string | null;
    colorsSpecifics: ColorsSpecific[];
}