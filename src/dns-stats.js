const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  let arr = Array.from({ length: domains.length }, (_, i) => domains[i].split(".").reverse());
  for (let i = 0; i < arr.length; i++) {
    let prop = "";
    for (j = 0; j < arr[i].length; j++) {
      prop += `.${arr[i][j]}`;
      if (obj.hasOwnProperty(prop)) {
        obj[prop] += 1;
      } else obj[prop] = 1;
    }
  }
  return obj;
}

module.exports = {
  getDNSStats,
};
