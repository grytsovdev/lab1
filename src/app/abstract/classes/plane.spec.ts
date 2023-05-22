import { Plane } from "./Plane";

describe('Plane Testing', () => {
    let plane: Plane;
    beforeEach(() => {
        plane = new Plane(5, 5)
    }
    )

    it("Створення екземпояру класу", () => {
        expect(plane).toBeTruthy();
    })

    it("Перевірка методу підрахунку ціни", () => {
        plane = new Plane(6, 6)
        let price = plane.calculatePrice();
        let expectedPrice = 3600;
        expect(price).toBe(expectedPrice)
    })

    it("Перевірка методу show()", () => {
        plane = new Plane(10, 15)
        expect(plane.show()).toContain("Літак")
    })

});