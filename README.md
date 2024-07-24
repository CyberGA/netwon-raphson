# Newton-Raphson Root Finding Algorithm

This project implements the Newton-Raphson method for finding the roots of a real-valued function using JavaScript. It also includes unit tests to verify the correctness of the implementation.

## Introduction

The Newton-Raphson method is an iterative algorithm for finding successively better approximations to the roots (or zeroes) of a real-valued function. This project provides a JavaScript implementation of the Newton-Raphson method along with unit tests to ensure its correctness.

## Code Base

The code base consists of two main files:

1. **[newtonRaphson.js](src/newtonRaphson.js)**: This file contains the implementation of the Newton-Raphson algorithm.
2. **[newtonRaphson.test.js](tests/newtonRaphson.test.js)**: This file contains unit tests for the Newton-Raphson algorithm using the Jest framework.

## Prerequisites
- Node.js and npm installed on your machine.
- A text editor or IDE of your choice.

## Installation
1.  Clone the repository:
    ```sh
    git clone https://github.com/CyberGA/newton-raphson.git
    cd newton-raphson
    ```
2.  Install the dependencies:
    ```sh
    npm install
    ```

## Explanation

<details>
<summary>Click to expand</summary>
The Newton-Raphson formula is `Xn+1 = Xn - [f(x)/f'(x)]`
- `func`: This evaluates with the guess value x and saves return value to `y`
- `funcPrime`: This evaluates the derivative of the function with the guess value x and saves return value to `yPrime`
- check if the derivative is too small. This is done to check the following:
    - Division by Zero: If the derivative is zero or very close to zero, it would result to division by zero or a very large number which can cause incorrect results
    - If the derivative is very small, it might not converge properly.
Therefore, by throwing an error, edge cases are handled
- `x = x - y/yPrime`: This is the main formula of the Newton-Raphson method
- `if (Math.abs(y) < 1e-7)`: This check ensures that the Newton-Raphson method stops iterating once it has found an estimate that is sufficiently close to the actual root, based on the specified tolerance. This helps in achieving the desired precision and prevents unnecessary computations.
- `return x`: This returns the final estimate of the root
-  `x = x1`: This updates the guess for the next iteration
-  `throw new Error(`Only ${maxIterations} iterations is allowed`)`: This throws and error to prevent the algorithm from running indefinitely when it does not converge to a solution.

</details>

## Running test
To run the unit tests, run:
```sh
npm test
```