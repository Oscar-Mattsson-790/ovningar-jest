const {
  multiply,
  capitalize,
  isWaterBoiling,
  inToRoman,
} = require("./index.js");

// 1)
describe("Multiply function", () => {
  it("should return the product of two positive numbers", () => {
    const expected = 10;
    const actual = multiply(2, 5);
    expect(actual).toBe(expected);
  });

  it("should return the product of a number and zero", () => {
    const expected = 0;
    const actual = multiply(2, 0);
    expect(actual).toBe(expected);
  });

  it("should return the product of two negative numbers", () => {
    const expected = 25;
    const actual = multiply(-5, -5);
    expect(actual).toBe(expected);
  });

  it("should return the product of a positive and a negative number", () => {
    const expected = -15;
    const actual = multiply(3, -5);
    expect(actual).toBe(expected);
  });

  it("should return an error message if either input is not a number", () => {
    const expectedMessage = "Invalid input. Both parameters should be numbers";
    const actual1 = multiply("a", 5);
    expect(actual1).toBe(expectedMessage);

    const actual2 = multiply(2, "b");
    expect(actual2).toBe(expectedMessage);

    const actual3 = multiply("a", "b");
    expect(actual3).toBe(expectedMessage);
  });
});

// 2)

describe("String operations", () => {
  it("should capitalize the first letter of a string", () => {
    const expected1 = "Pelle";
    const actual1 = capitalize("pelle");
    expect(actual1).toBe(expected1);

    const expected2 = "Hello";
    const actual2 = capitalize("hello");
    expect(actual2).toBe(expected2);
  });

  it("should return the same string if it starts with an uppercase letter", () => {
    const expected1 = "Pelle";
    const actual1 = capitalize("Pelle");
    expect(actual1).toBe(expected1);

    const expected2 = "World";
    const actual2 = capitalize("World");
    expect(actual2).toBe(expected2);
  });

  it("should handle a string with only one character", () => {
    const expected1 = "A";
    const actual1 = capitalize("a");
    expect(actual1).toBe(expected1);

    const expected2 = "B";
    const actual2 = capitalize("B");
    expect(actual2).toBe(expected2);
  });

  it("should return an error message if an empty string is provided", () => {
    const expectedMessage = "Input string is empty.";
    const actual = capitalize("");
    expect(actual).toBe(expectedMessage);
  });
});

// 3)

describe("Is water boiling function", () => {
  it("should return true if the temprature is at boiling point", () => {
    const expected = true;
    const actual = isWaterBoiling(100);
    expect(actual).toBe(expected);
  });

  it("should return true if the temprature is above the boiling point", () => {
    const expected = true;
    const actual = isWaterBoiling(101);
    expect(actual).toBe(expected);
  });

  it("should return false if the temperature is below the boiling point", () => {
    const expected = false;
    const actual = isWaterBoiling(99);
    expect(actual).toBe(expected);
  });

  it("should throw an error if the input is not a number", () => {
    const expectedMessage = "Invalid input. Parameter should be a number";
    let actualMessage = "";
    try {
      isWaterBoiling("a");
    } catch (error) {
      actualMessage = error.message;
    }
    expect(actualMessage).toBe(expectedMessage);

    actualMessage = "";
    try {
      isWaterBoiling(null);
    } catch (error) {
      actualMessage = error.message;
    }
    expect(actualMessage).toBe(expectedMessage);

    actualMessage = "";
    try {
      isWaterBoiling(undefined);
    } catch (error) {
      actualMessage = error.message;
    }
    expect(actualMessage).toBe(expectedMessage);
  });
});

// 4)

describe("In to roman function", () => {
  it("should convert 1 to I", () => {
    const expected = "I";
    const actual = inToRoman(1);
    expect(actual).toBe(expected);
  });

  it("should convert 2 to II", () => {
    const expected = "II";
    const actual = inToRoman(2);
    expect(actual).toBe(expected);
  });

  it("should convert 4 to IV", () => {
    const expected = "IV";
    const actual = inToRoman(4);
    expect(actual).toBe(expected);
  });
});
