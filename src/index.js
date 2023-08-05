module.exports = function toReadable (number) {

const numberWords = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  };

  const getWords = (num) => {
    if (num < 20) {
      return numberWords[num];
    } else if (num < 100) {
      const tensPlace = Math.floor(num / 10) * 10;
      const onesPlace = num % 10;
      return numberWords[tensPlace] + (onesPlace !== 0 ? " " + numberWords[onesPlace] : "");
    } else if (num < 1000) {
      const hundredsPlace = Math.floor(num / 100);
      const remainder = num % 100;
      return numberWords[hundredsPlace] + " hundred and" + (remainder !== 0 ? " and " + getWords(remainder) : "");
    } else if (num < 1000000) {
      const thousandsPlace = Math.floor(num / 1000);
      const remainder = num % 1000;
      return getWords(thousandsPlace) + " thousand and" + (remainder !== 0 ? " " + getWords(remainder) : "");
    } 
  }; 
  }
