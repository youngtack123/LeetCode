/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    if (!s || s.length === 0) return "";

    // Helper function to expand around the center and find the longest palindrome
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Return the palindrome substring found by expanding
        return s.slice(left + 1, right);
    }

    let longest = "";

    for (let i = 0; i < s.length; i++) {
        // Check for the longest odd-length palindrome (single character center)
        let oddPalindrome = expandAroundCenter(i, i);
        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }

        // Check for the longest even-length palindrome (between two characters center)
        let evenPalindrome = expandAroundCenter(i, i + 1);
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }

    return longest;
};