
import { Transport } from "./Transport";
export class Boat extends Transport {

    constructor(private k: number, private port: string) { super() }

    override calculatePrice() {
        return 5 * this.k * this.k
    }
    override show(): string {
        return `Назва: Корабель; Кількість пасажирів: ${this.k}; Порт приписки:${this.port} Ціна:${this.calculatePrice()}`
    }
}
