/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function (prices) {
  let count = 1;
  let total = 0;
    
  for (let i = 0; i < prices.length; i++) {
    if (prices[i - 1] - 1 === prices[i]) {
      count++;
    } else {
      count = 1;
    }
    total += count;
  }
  return total;
};