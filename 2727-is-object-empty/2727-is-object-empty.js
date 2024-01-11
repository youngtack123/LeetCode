/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // Check if it's an array and if it's empty
    if (Array.isArray(obj) && obj.length === 0) {
        return true;
    }

    // Check if it's an object and if it has no key-value pairs
    if (obj !== null && typeof obj === 'object' && Object.keys(obj).length === 0) {
        return true;
    }

    // If it's not an array or an object, or if it's not empty, return false
    return false;
};