const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length !== 0) {
      if (Array.isArray(arr)) {
        const newArr = arr.map((a) => this.calculateDepth(a));
        return Math.max(...newArr) + 1;
      }
    } else return 1;

    return 0;
  }
}

module.exports = {
  DepthCalculator,
};
