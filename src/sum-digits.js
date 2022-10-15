const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let summ = 0;
  let sum = n.toString().split("");
  for (let i = 0; i < sum.length; i++) {
    summ += +sum[i];
  }
  if (summ.toString().length > 1) {
    summ = getSumOfDigits(summ);
  }
  console.log(summ);
  return summ;
  // let sum = String(n)
  //   .split("")
  //   .reduce((acc, el) => acc + Number(el), 0);
  // if (String(sum).length > 1) {
  //   sum = getSumOfDigits(sum);
  // }
  // return sum;
}

module.exports = {
  getSumOfDigits,
};
