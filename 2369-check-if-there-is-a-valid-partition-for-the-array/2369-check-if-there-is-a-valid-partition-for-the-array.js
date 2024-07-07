/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function (nums) {
    const hash = new Array(nums.length);

    function isValid(idx) {
        if (idx == nums.length) return true;
        if (hash[idx] != null) return hash[idx];

        if (check2Elem(idx) && isValid(idx + 2)) hash[idx] = true;
        else if (check3Elem(idx) && isValid(idx + 3)) hash[idx] = true;
        else if (check3ConElem(idx) && isValid(idx + 3)) hash[idx] = true;
        else hash[idx] = false;

        return hash[idx];
    }

    return isValid(0);

    function check2Elem(idx) {
        if (nums.length - idx >= 2) {
            if (nums[idx] == nums[idx + 1]) return true;
        }
        return false;
    }

    function check3Elem(idx) {
        if (nums.length - idx >= 3) {
            if (nums[idx] == nums[idx + 1] && nums[idx + 1] == nums[idx + 2]) return true;
        }
        return false;
    }

    function check3ConElem(idx) {
        if (nums.length - idx >= 3) {
            if (nums[idx] + 1 == nums[idx + 1] && nums[idx + 1] + 1 == nums[idx + 2]) return true;
        }
        return false;
    }
};