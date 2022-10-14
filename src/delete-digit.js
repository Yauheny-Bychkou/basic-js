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
  let newArr = [];
  for (let i = 0; i < n.toString().length; i++) {
    newArr.push(
      +n
        .toString()
        .split("")
        .filter((_, num) => num !== i)
        .join("")
    );
  }
  return newArr.sort((a, b) => a - b)[newArr.length - 1];
}

module.exports = {
  deleteDigit,
};
