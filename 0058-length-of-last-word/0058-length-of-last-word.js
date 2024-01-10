/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const res = s.split(' ');
  
  let answer = ''
  for(let i = res.length - 1 ; i >= 0 ; i--) {
    if(res[i] !== '') {
      answer = res[i]
      break;
    }
  }
  return answer.length
};