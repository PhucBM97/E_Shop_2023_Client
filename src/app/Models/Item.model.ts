export class Item {
    name?: string;
    price?: number;
    quantity?: number;
    total?: number;
    imgUrl: string;

    constructor(name: string, price:number, quantity: number, total:number, imgUrl: string){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.total = total;
        this.imgUrl = imgUrl;
    }
}