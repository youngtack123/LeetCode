var longestContinuousSubstring = function(s) {
    if (s.length === 0) return 0
    if (s.length === 1) return 1

    let max = 1
    let count = 1

    for (let i = 1 ; i < s.length ; i++) {
        if (s.charCodeAt(i) === s.charCodeAt(i - 1) + 1) {
            count++;
            max = Math.max(max, count);
        } else {
            count = 1;
        }
    }

    return max;
};
