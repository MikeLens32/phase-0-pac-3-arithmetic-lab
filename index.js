let number = 10

function add() {
    return number += add();
  }
  
  function subtract() {
      return number -= subtract();
  }

  function divide() {
    return number /= divide();
  }

  function multiply() {
      return number *= multiply();
  }

  function add(a, b) {
      return a + b;
  }

  function subtract(a, b) {
      return a - b;
  }

  function multiply(a, b) {
      return a * b;
  }

  function divide(a, b) {
      return a / b;
  }

  function increment(n) {
      return ++n;
  }

  function decrement(n) {
      return --n;
  }

  function makeInt(n) {
        return parseInt(n, 10);
  }

  function preserveDecimal(n) {
      return parseFloat(n);
  }