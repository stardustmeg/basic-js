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
  let str = n.toString();
  let result = "";
  let arr = [];
  let highest = 0;

  for (let i = 0; i < str.length; i++) {
    result = removeCharAt(str, i);
    arr.push(+result);
    highest = Math.max(highest, +result);
  }
  return highest;
}

function removeCharAt(str, i) {
  let tmp = str.split("");
  tmp.splice(i, 1);
  return tmp.join("");
}

module.exports = {
  deleteDigit,
};
