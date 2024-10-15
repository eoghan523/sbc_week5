# Mocking Tests with Jest

## Challenge

In this exercise, you are provided with a module that retrieves a list of GitHub repositories for a given GitHub user. You can run the code using:

```bash
npm run start
```

To run the tests

```bash
npm test
```

Make sure to add your own GitHub username to test the functionality in index.js

The focus of this exercise is on mocking in tests, specifically using Jest. Mocking allows you to replace real functionality (like API calls or database connections) with simulated behavior, enabling you to test your code without relying on third-party services.

### Task:

1. Analyze the code and tests provided in the project.
2. Follow the TODO prompts in the code for specific tasks and research common scenarios where mocking is used.
3. Research and suggest real-world scenarios where mocking might be necessary, such as testing code that interacts with external services or databases.

### Key Learnings

Understand how mocking works in the context of Test Driven Development (TDD).
Learn how to use Jest to create unit tests for functions that rely on external services.
Develop the ability to mock functions and objects to simulate behavior in testing scenarios.
Explore how mocking improves test reliability and isolation, especially in complex systems.

### User Story

As a developer, I want to test my application without relying on external services, so I can ensure my code functions correctly in isolation, without waiting for real data or making live network calls.

### Acceptance Criteria

You have analyzed the code and followed the TODO prompts for mocking.
You successfully mock the API calls in your tests and ensure the tests pass without real API requests.
You can describe real-world scenarios where mocking is commonly used (e.g., APIs, databases, external services).

## Useful Resources

- [Jest Mock Functions](https://jestjs.io/docs/mock-functions) - Official Jest documentation on how to mock functions.
- [Testing Asynchronous Code with Jest](https://jestjs.io/docs/asynchronous) - How to handle async functions in Jest.
- [Mocking API Calls with Jest](https://www.freecodecamp.org/news/how-to-test-an-api-with-jest/) - Guide on how to mock API calls in Jest tests.
