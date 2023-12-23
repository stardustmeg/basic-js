const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }

  const transformedArr = [];

  const doubleNext = "--double-next";
  const discardPrev = "--discard-prev";
  const discardNext = "--discard-next";
  const doublePrev = "--double-prev";

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case doubleNext:
        if (i < arr.length - 1) {
          transformedArr.push(arr[i + 1]);
        }
        break;

      case discardPrev:
        if (i > 0 && arr[i - 2] !== discardNext) {
          transformedArr.pop();
        }
        break;

      case discardNext:
        i++;
        break;

      case doublePrev:
        if (i > 0 && arr[i - 2] !== discardNext) {
          transformedArr.push(arr[i - 1]);
        }
        break;

      default:
        transformedArr.push(arr[i]);
    }
  }
  return transformedArr;
}

module.exports = {
  transform,
};
