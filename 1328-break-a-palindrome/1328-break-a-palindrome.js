/**
 * @param {string} palindrome
 * @return {string}
 */
// var breakPalindrome = function(palindrome) {
    
//     if(palindrome.length === 1) return ''
    
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    
    
// };

var breakPalindrome = function (palindrome) {
    const len = palindrome.length;
    if (len === 1) return '';

    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (palindrome[i] !== 'a') {
            return (
                palindrome.substring(0, i) + 'a' + palindrome.substring(i + 1)
            );
        }
    }
    return palindrome.substring(0, len - 1) + 'b';
};