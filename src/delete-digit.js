const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  // 1. split string
  // 2. .map - create new array by iterating and replacing (instead of for loop)
  // 3. find maximum value
  return Math.max(...str.split('').map((_, i) => +removeCharAt(str, i)));
}

function removeCharAt(str, i) {
  let tmp = str.split("");
  tmp.splice(i, 1);
  return tmp.join("");
}

module.exports = {
  deleteDigit,
};
