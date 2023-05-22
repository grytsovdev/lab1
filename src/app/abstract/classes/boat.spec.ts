import { Boat } from "./Boat";

describe('Boat Testing', () => {
    let boat: Boat;
    beforeEach(() => {
        boat = new Boat(5, "Київ")
    }
    )

    it("Створення екземпояру класу", () => {
        expect(boat).toBeTruthy();
    })

    it("Перевірка методу підрахунку ціни", () => {
        boat = new Boat(6, "Одеса")
        let price = boat.calculatePrice();
        let expectedPrice = 180;
        expect(price).toBe(expectedPrice)
    })

});