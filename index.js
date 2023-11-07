function multiply(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return "Invalid input. Both parameters should be numbers";
  }
  return x * y;
}

function capitalize(text) {
  if (text === "") {
    return "Input string is empty.";
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function isWaterBoiling(degreesCelsius) {
  if (typeof degreesCelsius !== "number") {
    throw new Error("Invalid input. Parameter should be a number");
  }
  return degreesCelsius >= 100;
}

function inToRoman(number) {
  if (
    typeof number !== "number" ||
    number < 1 ||
    number > 18 ||
    Math.floor(number) !== number
  ) {
    throw new Error("Input must be an integer between 1 and 18");
  }

  const romanNumerals = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    14: "XIV",
    15: "XV",
  };

  let roman = "";
  let remaining = number;

  for (const [value, numeral] of Object.entries(romanNumerals).reverse()) {
    while (remaining >= value) {
      roman += numeral;
      remaining -= value;
    }
  }

  return roman;
}

module.exports = { multiply, capitalize, isWaterBoiling, inToRoman };
