// nameHelper.js

function createFullName(firstName, lastName) {
  if (!firstName || !lastName) {
    throw new Error("Both firstName and lastName are required");
  }

  return `${firstName} ${lastName}`;
}

module.exports = { createFullName };
