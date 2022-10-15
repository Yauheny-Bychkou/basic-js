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
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let array = Array(String(str));

  if (options.hasOwnProperty("addition")) {
    let arrayAdditions = [];
    if (typeof options.addition !== "string") {
      arrayAdditions.push(String(options.addition));
    } else arrayAdditions.push(options.addition);

    if (options.hasOwnProperty("additionRepeatTimes")) {
      for (let i = 1; i < options.additionRepeatTimes; i++) {
        if (typeof options.addition !== "string") {
          arrayAdditions.push(String(options.addition));
        } else arrayAdditions.push(options.addition);
      }
    }
    if (options.hasOwnProperty("additionSeparator")) {
      arrayAdditions = arrayAdditions.join(`${String(options.additionSeparator)}`);
    } else {
      arrayAdditions = arrayAdditions.join("|");
    }
    array[0] = String(str).concat(arrayAdditions);
  }

  if (options.hasOwnProperty("repeatTimes")) {
    for (let i = 1; i < options.repeatTimes; i++) {
      array.push(array[0]);
    }
  }
  if (options.hasOwnProperty("separator")) {
    return array.join(`${options.separator}`);
  } else return array.join(`+`);
}

module.exports = {
  repeater,
};
