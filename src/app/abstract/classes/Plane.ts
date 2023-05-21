
import { Transport } from "./Transport";
export class Plane extends Transport {

    constructor(private v: number, private h: number) {
        super();
    }
    override show(): string {
        return `Назва: Літак; Висота: ${this.h}; Швидкіст: ${this.v}; Ціна:${this.calculatePrice()}`
    }
    override calculatePrice() {
        return 100 * this.h * this.v;
    }
}
