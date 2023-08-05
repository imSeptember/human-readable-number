module.exports = function toReadable (number) {


const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  const getWords = (number) => {
    if (number < 10) {
      return units[number];
    } else if (number < 20) {
      return teens[number - 10];
    } else if number < 100) {
      return tens[Math.floor(number / 10)] + (number % 10 !== 0 ? "-" + units[number % 10] : "");
    } else if (number < 1000) {
      return units[Math.floor(number / 100)] + " hundred" + (number % 100 !== 0 ? " and " + getWords(number % 100) : "");
    } else if (number < 1000000) {
      return getWords(Math.floor(number / 1000)) + " thousand" + (number % 1000 !== 0 ? " " + getWords(number % 1000) : "");
    } else {
      return "Number is too large";
    }
  };

  if (number === 0) {
    return "zero";
  } else if (number < 0) {
    return "negative " + getWords(Math.abs(number));
  } else {
    return getWords(number);
  }
