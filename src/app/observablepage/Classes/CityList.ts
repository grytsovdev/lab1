import { City } from "./City";

export class CityList {
    citym = new Map();
    constructor() {
        this.citym.set(0, { id: 0, name: "Київ" }),
            this.citym.set(1, { id: 1, name: "Львів" })

    }
    add(city: City) {
        this.citym.set(city.id, { id: city.id, name: city.name })
    }
}