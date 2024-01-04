/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
  const answer = [];  
  let count = 0;
  
  for(let i = 0 ; i < nums.length ; i++) {
    if(count === 1) {
      break;
    }
    for(let j = i + 1 ; j < nums.length ; j++) {
      if(nums[i] + nums[j] === target) {
        answer.push(i);
        answer.push(j);
        count++;
        break;
      }
    }
    
  }
  
  return answer
};