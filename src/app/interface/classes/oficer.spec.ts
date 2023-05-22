import { Oficer } from "./Oficer";
describe('Oficer Testing', () => {
    let oficer: Oficer;
    beforeEach(() => {
        oficer = new Oficer("Bob", 34)
    }
    )

    it("Створення екземпояру класу", () => {
        expect(oficer).toBeTruthy();
    })

    it("Перевірка методу підрахунку зарплати", () => {

        let salary = oficer.getSalary();
        let expectedSalary = 34 * 1000 / 25;
        expect(salary).toBe(expectedSalary)
    })
    it("Перевірка методу work()", () => {

        expect(oficer.work()).toContain("Bob")
    })

});