/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let map = new Map();
    let order = [];

    for (let str of arr) {
        if (map.has(str)) {
            let idx = order.indexOf(str);
            if (idx !== -1) {
                order.splice(idx, 1);
            }
        } else {
            map.set(str, 1);
            order.push(str);
        }
    }

    if (order.length < k) return "";

    return order[k - 1];
};

