/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    const ans = generate(n)

    return ans.map(bin => parseInt(bin, 2))
};

function generate (n) {
    if (n === 1) return ["0", "1"];

    const generatedBinaryStringArr = generate(n - 1);

    const ans = []

    for(let binStr of generatedBinaryStringArr) {
        ans.push("0" + binStr)
    }

    for(let i = generatedBinaryStringArr.length - 1; i >= 0; i--) {
        const binStr = generatedBinaryStringArr[i]
        
        ans.push("1" + binStr)
    }

    return ans

}