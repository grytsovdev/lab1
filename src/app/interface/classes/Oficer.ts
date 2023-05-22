import { Worker } from "./Worker";
export class Oficer extends Worker {

    getSalary() {
        return this.age * 1000 / 25
    }
    constructor(name: string, age: number) {
        super(name, age)
    }

    override work(): string {
        return `Я ${this.name} мені ${this.age} і я працюю на посаді Службовець і заробляю ${this.getSalary()}`
    }

}