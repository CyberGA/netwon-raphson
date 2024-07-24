const newtonRaphson = require("../src");

test('finds root of x^2 - 2', () => {
    const func = x => x ** 2 - 2;
    const funcPrime = x => 2 * x;

    const root = newtonRaphson(func, funcPrime, 1);
    console.log("(x^2 - 2) => ", root);
    expect(root).toBeCloseTo(Math.sqrt(2), 7);
})

test('finds root of x^2 - 4', () => {
    const func = x => x ** 2 - 4;
    const funcPrime = x => 2 * x;

    const root = newtonRaphson(func, funcPrime, 1);
    console.log("(x^2 - 4) => ", root);
    expect(root).toBeCloseTo(2, 0);
})

test('finds root of x^3 + 2x -2', () => {
    const func = x => (x ** 3) + (2 * x) - 2;
    const funcPrime = (x) => 3 * x ** 2 + 2;

    const root = newtonRaphson(func, funcPrime, 1);
    console.log("(x^3 + 2x -2) => ", root)
    expect(root).toBeCloseTo(0.77092, 5);
})

test('finds root of x^3 - 2x - 5', () => {
    const func = x => (x ** 3) - (2 * x) - 5;
    const funcPrime = x => (3 * (x ** 2)) - 2;

    const root = newtonRaphson(func, funcPrime, 1);
    console.log("(x^3 - 2x - 5) => ", root)
    expect(root).toBeCloseTo(2, 0);
})

test('throws error if derivative is too small', () => {
    const func = x => x ** 2 - 2;
    const funcPrime = x => 0;

    expect(() => newtonRaphson(func, funcPrime, 1)).toThrow("Derivative is too small");
})


test("throws error if derivative is zero at initial guess", () => {
  const func = (x) => x ** 3;
  const funcPrime = (x) => 3 * x ** 2;

  expect(() => newtonRaphson(func, funcPrime, 0)).toThrow(
    "Derivative is too small"
  );
});

test("throws error if derivative becomes zero during iterations", () => {
  const func = (x) => x ** 3 - 3 * x + 2;
  const funcPrime = (x) => 3 * x ** 2 - 3;

  expect(() => newtonRaphson(func, funcPrime, 1)).toThrow(
    "Derivative is too small"
  );
});

test("throws error if max iterations is reached", () => {
  const func = (x) => x ** 2 - 2;
  const funcPrime = (x) => 2 * x;

  expect(() => newtonRaphson(func, funcPrime, 1000, 1e-7, 5)).toThrow(
    "Only 5 iterations is allowed"
  );
});