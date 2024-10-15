# Excluding Files from GitHub: .gitignore

## Challenge

In this exercise, you will create a simple Node.js application that includes a `node_modules` folder after installing dependencies with **NPM**. Since it’s considered bad practice to include the `node_modules` folder in a GitHub repository, your task is to create a `.gitignore` file to exclude it from being tracked.

Additionally, you will learn how to remove the `node_modules` folder from a live repository if it was accidentally committed and pushed.

## Key Learnings

- Understand what a **.gitignore** file is and how it works.
- Learn how to **exclude files and folders** from being tracked by Git using `.gitignore`.
- Gain skills in **removing files and folders from a live GitHub repository** if they were mistakenly added.

## User Story

As a developer, I want to ensure that unnecessary files like `node_modules` are excluded from my GitHub repository to save space and maintain best practices.

## Acceptance Criteria

- You have created a `.gitignore` file and correctly excluded the `node_modules` folder.
- You can remove the `node_modules` folder from a live repository if it was accidentally added.
- You can explain why it's important to exclude certain files and folders from version control.

---

## Steps to Complete

### Step 1: Set Up Your Node.js Application

1. Create a new folder for your project.
2. Initialize the project by running:
   ```bash
   npm init -y
   ```
3. Install any packages (e.g., npm install express), which will generate the node_modules folder.

### Step 2: Create a .gitignore File

1. Inside the root of your project folder, create a new file called .gitignore.
2. Add the following line to the .gitignore file to exclude the node_modules folder:

```bash
node_modules/
```

### Step 3: Add and Commit Your Code

1. Initialize a Git repository:

```bash
git init
```

2. Add your files to the staging area (the node_modules folder will be ignored):

```bash
git add .
```

3. Commit your changes:

```bash
git commit -m "Initial commit with .gitignore"
```

### Step 4: Pushing to GitHub

1. Create a new repository on GitHub.
2. Add the remote repository to your local project

```bash
git remote add origin <your-repo-url>
```

3. Push your project to GitHub

```bash
git push -u origin main
```

### Step 5: Removing node_modules from a Live Repo (If Accidentally Added)

1. If the node_modules folder was accidentally committed and pushed, run the following commands to remove it from your Git history:

```bash
git rm -r --cached node_modules
```

2. Commit the changes

```bash
git commit -m "Remove node_modules from the repo"
```

3. Push the updated repository to GitHub:

```bash
git push origin main
```
