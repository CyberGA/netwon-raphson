

/**
 * @description This function find the root of a function using the
 *              Netwon-Raphson method
 * 
 * @author Gbenga Etomu
 * 
 * @param {Function} func - The function to find the root for "f(x)"
 * @param {Function} funcPrime - The derivation of func "f'(x)"
 * @param {number} guess - Then inital quess for the root
 * @param {number} tolerance - The tolerance for the root value
 * @param {number} maxIterations - The max number of iterations
 * 
 * @returns {number} - The approximate root
 */

function newtonRaphson(func, funcPrime, guess, tolerance = 1e-7, maxIterations = 100) {
  let x = guess;

  for (let i = 0; i < maxIterations; i++) {
    const y = func(x);
    const yPrime = funcPrime(x);

    if (Math.abs(yPrime) < tolerance) {
      throw new Error("Derivative is too small");
    }

    const x1 = x - y / yPrime;

    if (Math.abs(x1 - x) < tolerance) {
      return x1;
    }
    x = x1;
  }
  throw new Error(`Only ${maxIterations} iterations is allowed`);
}

module.exports = newtonRaphson;