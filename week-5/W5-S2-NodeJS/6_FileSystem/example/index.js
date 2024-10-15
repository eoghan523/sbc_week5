const fs = require("fs");
const path = require("path");

// Get the message from the command-line argument
const message = process.argv[2];

// Check if a message was provided
if (!message) {
  console.log("Please provide a message as a command-line argument.");
  process.exit(1); // Exit the process if no message is provided
}

const filePath = path.join(__dirname, "message.txt");

// Write the message to message.txt
fs.writeFile(filePath, message, (err) => {
  if (err) {
    console.error("Error writing the message to the file:", err);
    return;
  }
  console.log("Message written to message.txt successfully!");

  // Read the contents of the file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    console.log("Content of message.txt:");
    console.log(data);
  });
});
