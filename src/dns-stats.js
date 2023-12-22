const { NotImplementedError } = require('../extensions/index.js');

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
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here

  let result = {};

  domains.forEach((domain) => {

    let splitDomain = domain.split('.').reverse();
    let current = '';

    splitDomain.forEach((part) => {

      current += `.${part}`;

      result[current] = (result[current] || 0) + 1;

    });
  });


  return result;

}

module.exports = {
  getDNSStats
};
