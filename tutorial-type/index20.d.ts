interface WaterType {
    model: string;
    price: number;
}
declare class Water implements WaterType {
    model: string;
    price: number;
    constructor(a: string);
}
declare let drink: Water;
