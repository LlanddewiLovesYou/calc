// const Calculator = require("../Calculator");
import { Calculator } from "../Calculator";

describe("Calculator.js", () => {
  let calc;
  describe("Calculator.calculate", () => {
    beforeEach(() => {
      calc = new Calculator();
    });
    it("performs a simple calculation properly", () => {
      expect(calc.calculate("2 + 2")).toEqual(4);
    });

    it("perfoms a complex calulation properly", () => {
      expect(calc.calculate("2 + 2 + 2 - 3")).toEqual(3);
    });
  });
});
