export class Calculator {
  constructor() {
    this.operands = [];
    this.operators = [];
    this.answer = 0;
  }
  add(a, b) {
    return a + b;
  }

  sub(a, b) {
    return a - b;
  }

  mul(a, b) {
    return a * b;
  }

  div(a, b) {
    return a / b;
  }

  _parse(expression) {
    const values = expression.split(" ");

    values.forEach((value) => {
      const operations = ["+", "-", "*", "/"];
      if (operations.includes(value)) {
        this.operators.push(value);
      } else {
        this.operands.push(parseInt(value));
      }
    });
  }

  _operate() {
    try {
      this.operators.forEach((operator, i) => {
        if (i === 0) {
          this.answer = this.operands.shift();
        }
        const second = this.operands.shift();
        switch (operator) {
          case "+":
            this.answer = this.add(this.answer, second);
            break;
          case "-":
            this.answer = this.sub(this.answer, second);
            break;
          case "*":
            this.answer = this.mul(this.answer, second);
            break;
          case "/":
            this.answer = this.div(this.answer, second);
            break;
          default:
            break;
        }
      });
    } catch (e) {
      this.answer = "E";
    }
  }

  calculate(expression) {
    this._parse(expression);
    this._operate();
    return this.answer;
  }
}
