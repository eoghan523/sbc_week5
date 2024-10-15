# NodeJS Modularised Calculator

## Challenge

In this exercise, you will learn about code reuse by organizing functions into **modules** in Node.js. This is a key part of the **DRY** principle (Don't Repeat Yourself) in software development, which aims to reduce redundancy. Your task is to build a simple calculator with functions for:

- **Addition**
- **Subtraction**
- **Multiplication**
- **Division**

Once you create these functions, you will make them re-usable by exporting them as a **module** that can be imported into other projects or files.

### Bonus:

- Implement a feature to save each calculation to a file using **`appendFile`** from the Node.js File System (`fs`) module.

## Key Learnings

- How to create and export functions as **ES6 modules** to organize and reuse code.
- Learn how to **read and write** data to the file system in Node.js.
- Understand the concept of the **DRY** principle and its importance in software development.

## User Story

As a developer, I want to create a modularized set of calculator functions that I can reuse across different projects. I also want to store each calculation in a file for future reference using `appendFile`.

## Acceptance Criteria

- You have created four functions: `add`, `subtract`, `multiply`, and `divide`, which are grouped into a reusable module.
- You can **import** the calculator module and use the functions in a separate file.
- You can perform operations like `add(2, 3)` and get the correct result.
- (Bonus) Each calculation is logged to a file using `appendFile`, storing the operation and result (e.g., `2 + 3 = 5`).

---

## Useful Resources

- [ES6 Modules in Node.js](https://nodejs.org/docs/latest-v14.x/api/esm.html) - Learn how to export and import modules using ES6 syntax in Node.js.
- [Node.js File System Module](https://nodejs.org/api/fs.html) - Official documentation for working with the file system in Node.js, including `appendFile`.
