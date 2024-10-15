# Introducing Node Package Manager (NPM)

## Challenge

In this exercise, you will create a simple Node.js application that uses the **figlet** package (a tool for creating text banners). The steps involved are:

1. **Initialize** a Node.js project using NPM.
2. **Install** the figlet package using NPM.
3. Set up a custom **start command** in the `package.json` file to run your `index.js` file.
4. Test the application by running the start command and see how the figlet package works to generate a text banner.

## Key Learnings

- Understand what **NPM** (Node Package Manager) is and how it helps in managing packages and dependencies.
- Learn how to **initialize** a project using NPM.
- Learn how to **install packages** from the NPM registry.
- Understand how to modify **`package.json`** to create custom start scripts.
- Run a Node.js application that uses an external package.

## User Story

As a developer, I want to create a Node.js project, install third-party libraries using NPM, and run a simple application that uses these packages to generate outputs.

## Acceptance Criteria

- You have successfully initialized an NPM project using `npm init`.
- The **figlet** package is installed correctly and listed as a dependency in `package.json`.
- The `package.json` file contains a custom **start script** that runs `node index.js`.
- Running `npm start` outputs a figlet-generated text banner to the console.

---

## Steps to Complete

### Step 1: Initialize NPM

1. Open your terminal.
2. Run the command:

   ```bash
   npm init
   ```

3. Follow the prompts to create your package.json file.

### Step 2: Install Figlet Package

1. Install figlet by running

   ```bash
   npm install figlet
   ```

2. Confirm that the package is listed in the dependencies section of your package.json file.

### Step 3: Set Up Your Application

1. Create an index.js file.
2. Inside index.js, add the following code to test the figlet package:

   ```bash
   const figlet = require('figlet');

   figlet('Hello, NPM!', function(err, data) {
   if (err) {
       console.log('Something went wrong...');
       console.dir(err);
       return;
   }
   console.log(data);
   });
   ```

### Step 4: Create a Start Command

1. In package.json, add the following line under "scripts"

   ```bash
   "start": "node index.js"
   ```

### Step 5: Run the Application

1. In your terminal, run

   ```bash
   npm start
   ```

2. You should see a figlet-generated text banner of "Hello, NPM!" in the terminal.

## Useful Resources

- [NPM Documentation](https://docs.npmjs.com/) - Official guide for using NPM.
- [Figlet on NPM](https://www.npmjs.com/package/figlet) - Documentation for the figlet package.
