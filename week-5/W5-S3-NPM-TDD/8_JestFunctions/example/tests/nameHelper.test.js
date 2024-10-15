// nameHelper.test.js

const { createFullName } = require("../nameHelper");

describe("createFullName", () => {
  test("should return the full name when firstName and lastName are provided", () => {
    expect(createFullName("John", "Smith")).toBe("John Smith");
  });

  test("should throw an error if firstName is missing", () => {
    expect(() => createFullName(undefined, "Smith")).toThrow(
      "Both firstName and lastName are required"
    );
  });

  test("should throw an error if lastName is missing", () => {
    expect(() => createFullName("John", undefined)).toThrow(
      "Both firstName and lastName are required"
    );
  });

  test("should throw an error if both firstName and lastName are missing", () => {
    expect(() => createFullName()).toThrow(
      "Both firstName and lastName are required"
    );
  });
});
