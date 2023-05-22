import { Engineer } from "./Engineer";
describe('Engineer Testing', () => {
    let engineer: Engineer;
    beforeEach(() => {
        engineer = new Engineer("Frank", 20)
    }
    )

    it("Створення екземпояру класу", () => {
        expect(engineer).toBeTruthy();
    })

    it("Перевірка методу підрахунку зарплати", () => {

        let salary = engineer.getSalary();
        let expectedSalary = 20 * 1000;
        expect(salary).toBe(expectedSalary)
    })
    it("Перевірка методу work()", () => {

        expect(engineer.work()).toContain("Frank")
    })

});