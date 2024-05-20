/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    
    if(nums.length === 1) return 1
    
    let wiggle = []
    
    for(let i = 0 ; i < nums.length - 1 ; i++) {
        const curr = nums[i]
        const next = nums[i + 1]
        const diff = next - curr
        
        if(diff < 0 && wiggle[wiggle.length - 1] !== -1) {
            wiggle.push(-1)
        } 
        
        if(diff > 0 && wiggle[wiggle.length - 1] !== 1) {
            wiggle.push(1)   
        }
    }
    
    return wiggle.length + 1
};