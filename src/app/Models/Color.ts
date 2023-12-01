import { ColorsSpecific } from "./ColorsSpecific";

export interface Color {
    colorId: number;
    colorName: string | null;
    createdDate: string | null;
    updatedDate: string | null;
    colorsSpecifics: ColorsSpecific[];
}