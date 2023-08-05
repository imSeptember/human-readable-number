module.exports = function toReadable (number) {
  const numberToWords = (num) => {
  const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  const getWords = (num) => {
    if (num < 10) {
      return units[num];
    } else if (num < 20) {
      return teens[num - 10];
    } else if (num < 100) {
      return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? "-" + units[num % 10] : "");
    } else if (num < 1000) {
      return units[Math.floor(num / 100)] + " hundred" + (num % 100 !== 0 ? " and " + getWords(num % 100) : "");
    } else if (num < 1000000) {
      return getWords(Math.floor(num / 1000)) + " thousand" + (num % 1000 !== 0 ? " " + getWords(num % 1000) : "");
    } else {
      return "Bad number";
    }
  };

  if (num === 0) {
    return "zero";
  } else if (num < 0) {
    return "negative " + getWords(Math.abs(num));
  } else {
    return getWords(num);
  }
};
