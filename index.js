let myMath = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },

  divide(a, b) {
    return a / b;
  },

  multiply(a, b) {
    return a * b;
  },

  calculate(operator, a, b) {
    return myMath[operator](a, b);
  }
};

let { calculate } = myMath;

console.log(calculate("subtract", 4, 5));
