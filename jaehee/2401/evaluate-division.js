/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const filter = {};
  equations.forEach(([a, b], idx) => {
    filter[a] = [values[idx], b];
  });

  console.log(filter);
};
