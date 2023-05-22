import { Worker } from "./Worker";
export class Engineer extends Worker {

    getSalary() {
        return this.age * 1000
    }
    constructor(name: string, age: number) {
        super(name, age)
    }

    override work(): string {
        return `Я ${this.name} мені ${this.age}  я працюю на посаді Інженер і заробляю ${this.getSalary()}`
    }

}