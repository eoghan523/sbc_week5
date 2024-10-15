# TDD: Testing Your Modularised Calculator

## Challenge

In this challenge, you will apply **Test Driven Development (TDD)** to the modularised calculator you built in the previous session. The goal is to write a set of automated tests for each calculator function (add, subtract, multiply, divide).

The tests should work reliably and cover all edge cases to ensure your calculator module functions correctly across different scenarios. Once all tests pass, you will create a demonstration video to show the application and testing procedure.

## Submission Requirements:

- **GitHub Repository**: Submit a link to your GitHub repo containing your calculator module and tests.
- **Video Walkthrough**: Record a video demonstrating:

  1. The application working.
  2. The testing process (running tests and showing that they pass).

  You can use screen recording tools such as **Screencastify** or **QuickTime**. Audio is optional, and the video should focus on showing the working tests.

### Tools:

- **Jest** or any other testing framework of your choice.
- **Screencastify**, **QuickTime**, or any other screen recording software for the video submission.

## Key Learnings

- Understand how to apply **Test Driven Development (TDD)** principles in an existing project.
- Learn how to write and implement tests to ensure code reliability and correctness.
- Gain experience using **screen recording tools** to demonstrate project functionality.

## User Story

As a developer, I want to ensure my modularised calculator functions correctly through automated tests, so that I can confidently use it in other projects. I also want to document and present the working application with test coverage using a video walkthrough.

## Acceptance Criteria

- You have written automated tests for all calculator functions (add, subtract, multiply, divide).
- Your tests cover normal operations and edge cases (e.g., division by zero, negative numbers).
- All tests pass successfully.
- You have submitted a GitHub repo containing:
  - The calculator module.
  - The test files.
- You have submitted a **video walkthrough** demonstrating:
  - The calculator functionality.
  - The testing process, with all tests passing.

---

## Steps to Complete

### Step 1: Set Up Your Test Environment

1. Install a testing framework such as **Jest**:
   ```bash
   npm install --save-dev jest
   ```
2. Configure your test script in package.json

   ```bash
   "scripts": {
   "test": "jest"
   }
   ```

### Step 2: Write Tests for Each Calculator Function

1. Write unit tests for each function:

- Addition: Test basic addition, negative numbers, and zero.
- Subtraction: Test simple subtraction, edge cases like subtracting from zero.
- Multiplication: Test multiplication with positive and negative numbers, multiplication by zero.
- Division: Test division by zero, negative numbers, and division of integers and floats.

Example test for the add function using Jest:

```bash
const { add } = require('./calculator');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});
```

### Step 3: Run Your Tests

1. Run the tests to ensure they pass:

```bash
npm run test
```

2. Ensure the tests cover different edge cases.

### Step 4: Record Your Video Walkthrough

1. Use Screencastify, QuickTime, or any other screen recording tool.
2. Record the following:

- Running the calculator functions.
- Running the automated tests and showing all tests passing.

3. Save the video and upload it to your preferred platform (Google Drive, YouTube, etc.).

## Useful Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started) - Official Jest documentation for getting started with testing.
- [TDD Guide](https://www.freecodecamp.org/news/an-introduction-to-test-driven-development-c3a321bd2f2c/) - An introduction to Test Driven Development.
- [Screencastify](https://www.screencastify.com/) - A simple tool for recording and sharing your screen.
- [QuickTime Guide](https://support.apple.com/guide/quicktime-player/record-your-screen-qtp97b08e666/mac) - Guide to using QuickTime for screen recording.
