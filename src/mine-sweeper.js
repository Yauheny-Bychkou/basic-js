const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arr = [].concat(matrix);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].every((item) => item === false)) {
      count++;
    }
  }
  if (count > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].every((item) => item === false)) {
        for (let m = 0; m < arr[i].length; m++) {
          arr[i][m] = 1;
        }
      }
      for (j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === true) {
          arr[i][j] = 1;
        }
        if (arr[i][j] === false) {
          if (j === arr[i].length - 1) {
            arr[i][j] = 1;
          } else arr[i][j] = 2;
        }
      }
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      for (j = 0; j < arr[i].length; j++) {
        arr[i][j] = 0;
      }
    }
  }
  return arr;
}

module.exports = {
  minesweeper,
};
