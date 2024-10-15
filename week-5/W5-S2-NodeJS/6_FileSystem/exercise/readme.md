# Working with Files in NodeJS

## Challenge

In this exercise, you will explore how to work with the file system in **NodeJS**. You are given a code sample that takes a message from the command line and appends it to a JSON file, which serves as a simple message store.

### Task:

1. **Analyze** the provided code and complete it so that it correctly reads from the JSON file, appends a new message, and writes the updated data back to the file.
2. You will need to:
   - Convert the JSON data from the file into a native JavaScript object (an array of messages).
   - Push the new message to this array.
   - Convert the updated array back to JSON format and write it back to the file.

### Bonus Challenge:

- Investigate the **`appendFile`** function. What does it do, and in what scenarios might it be more appropriate to use than `writeFile`?

By completing this challenge, you’ll become more familiar with handling file system operations, working with JSON, and manipulating data in Node.js.

## Key Learnings

- How to read from and write to files using the Node.js **fs** (File System) module.
- How to **convert JSON** data into native JavaScript objects and arrays, and how to convert them back to JSON format.
- The difference between **`writeFile`**, **`readFile`**, and **`appendFile`**, and when to use each.

## User Story

As a developer, I want to store messages in a JSON file using Node.js, so I can understand how to work with the file system and JSON data in a real-world application.

## Acceptance Criteria

- You can read data from the JSON file, convert it to a JavaScript object, modify it, and write it back to the file.
- The updated messages array is stored successfully in the JSON file.
- You can describe the difference between `writeFile`, `readFile`, and `appendFile`.
- (Bonus) You understand and can explain how **`appendFile`** works and provide an example of when it might be used.

---

## Useful Resources

- [Node.js File System Module](https://nodejs.org/api/fs.html) - Official documentation on Node.js file system methods such as `readFile`, `writeFile`, and `appendFile`.
- [Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) - How to parse JSON in JavaScript and convert objects to JSON strings.
