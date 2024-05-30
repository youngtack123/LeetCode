/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
const maxDivScore = (a, b) => {
    let f = [];
    b.map((d, i) => {
        let cnt = 0;
        for (const x of a) {
            if (x % d == 0) cnt++;
        }
        f.push([cnt, d]);
    });
    f.sort((x, y) => y[0] - x[0] || x[1] - y[1]);
    return f[0][1];
};