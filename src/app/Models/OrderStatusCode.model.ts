export class OrderStatusCodeDTO {
    orderId: number;
    code: number;

    constructor(orderId: number, code: number) {
        this.orderId = orderId;
        this.code = code;
    }
}