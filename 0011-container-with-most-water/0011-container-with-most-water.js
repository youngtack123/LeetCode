/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;

    let i = 0;
    let j = height.length - 1;

    while(i < j) {
        const minHeight = Math.min(height[i], height[j]);
        const width = j - i;
        max = width * minHeight > max && width * minHeight || max;

        if (height[j] < height[i]) {
            j--;
        } else {
            i++;
        }
    }

    return max;
};