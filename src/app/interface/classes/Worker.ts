import { IWork } from "../interfaces/IWork";
import { Person } from "../interfaces/Person"

export abstract class Worker implements Person, IWork {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    abstract work(): string


}