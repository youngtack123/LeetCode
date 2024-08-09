var minimumOperations = function(nums) {
    let count = 0;
    
    while (true) {
        nums = nums.filter(num => num > 0);
        if (nums.length === 0) {
            break;  
        } 
        let min = Math.min(...nums);    
        
        nums = nums.map(num => num - min);
        count++;
    }
    return count;
};
