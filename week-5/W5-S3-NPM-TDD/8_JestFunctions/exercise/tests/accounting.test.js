// VATCalculator.test.js

const { calculateGross, calculateNet, calculateVAT } = require("../accounting");

describe("VAT Calculator", () => {
  // Test cases for calculateGross function
  describe("calculateGross", () => {
    test("should calculate the gross amount with default VAT (20%)", () => {
      expect(calculateGross(100)).toBe(120); // 100 + 100 * 0.2 = 120
    });

    test("should calculate the gross amount with custom VAT percentage", () => {
      expect(calculateGross(100, 0.11)).toBe(110); // 100 + 100 * 0.1 = 110
    });

    test("should throw an error if amount is not a number", () => {
      expect(() => calculateGross("100", 0.2)).toThrow("Numbers are invalid");
    });

    test("should throw an error if vatPercentage is not a number", () => {
      expect(() => calculateGross(100, "0.2")).toThrow(
        "Both amount and vatPercentage must be numbers"
      );
    });
  });

  // Test cases for calculateNet function
  describe("calculateNet", () => {
    test("should calculate the net amount with default VAT (20%)", () => {
      expect(calculateNet(120)).toBe(120); // 120 / (1 + 0.2) = 100
    });

    test("should calculate the net amount with custom VAT percentage", () => {
      expect(calculateNet(110, 0.1)).toBe(100); // 110 / (1 + 0.1) = 100
    });

    test("should throw an error if amount is not a number", () => {
      expect(() => calculateNet("120", 0.2)).toThrow(
        "Both amount and vatPercentage must be numbers"
      );
    });

    test("should throw an error if vatPercentage is not a number", () => {
      expect(() => calculateNet(120, "0.2")).toThrow(
        "Both amount and vatPercentage must be numbers"
      );
    });
  });

  // Test cases for calculateVAT function
  describe("calculateVAT", () => {
    test("should calculate VAT with default VAT (20%)", () => {
      expect(calculateVAT(100)).toBe(20); // 100 * 0.2 = 20
    });

    test("should calculate VAT with custom VAT percentage", () => {
      expect(calculateVAT(100, 0.1)).toBe(10); // 100 * 0.1 = 10
    });

    test("should throw an error if amount is not a number", () => {
      expect(() => calculateVAT("100", 0.2)).toThrow(
        "Both amount and vatPercentage must be numbers"
      );
    });

    test("should throw an error if vatPercentage is not a number", () => {
      expect(() => calculateVAT(100, "0.2")).toThrow(
        "Both amount and vatPercentage must be numbers"
      );
    });
  });
});
