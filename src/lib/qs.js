import qs from 'qs';

/**
 * usage)
 *
 * const obj = qs.parse('a=c');
 *
 * result : { a: 'c' }
 *
 * https://github.com/ljharb/qs
 * @param {String} query
 * @param {object} options
 */
const parse = (query, options) => {
  return qs.parse(
    query,
    options || {
      ignoreQueryPrefix: true,
      encode: false,
      arrayFormat: 'comma',
      addQueryPrefix: true,
    },
  );
};

/**
 * usage)
 *
 * const str = qs.stringify({ a: 'c' });
 *
 * result : 'a=c'
 *
 * https://github.com/ljharb/qs
 * @param {object} obj
 * @param {object} options
 */
const stringify = (obj, options) => {
  return qs.stringify(
    obj,
    options || {
      indices: false,
      encode: false,
      arrayFormat: 'comma',
      addQueryPrefix: true,
    },
  );
};

export { parse, stringify };
