const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING',
 * { repeatTimes: 3,
 * separator: '**',
 * addition: 'PLUS',
 * additionRepeatTimes: 3,
 * additionSeparator: '00'
 * })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatedString = "";
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || "+";
  let addition = options.addition !== undefined ? String(options.addition) : "";
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || "|";

  // 1. create new array for Addition (repeat it times)
  // 2. fill each element with addition
  // 3. join elements into a string with additionSeparator
  let repeatedAddition = new Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);

  // 1. create new array (repeat it times)
  // 2. fill each elemnt again
  // 3. join with its separator
  repeatedString = new Array(repeatTimes)
    .fill(str + repeatedAddition)
    .join(separator);

  return repeatedString;
}

module.exports = {
  repeater,
};
