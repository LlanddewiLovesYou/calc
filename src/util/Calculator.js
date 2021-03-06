export class Calculator {
  constructor() {
    this.operands = [];
    this.operators = [];
    this.answer = 0;
  }
  _add(a, b) {
    return a + b;
  }

  _sub(a, b) {
    return a - b;
  }

  _mul(a, b) {
    return a * b;
  }

  _div(a, b) {
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
            this.answer = this._add(this.answer, second);
            break;
          case "-":
            this.answer = this._sub(this.answer, second);
            break;
          case "*":
            this.answer = this._mul(this.answer, second);
            break;
          case "/":
            this.answer = this._div(this.answer, second);
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
