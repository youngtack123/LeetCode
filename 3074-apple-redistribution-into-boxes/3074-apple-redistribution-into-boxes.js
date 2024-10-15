/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    const total = apple.reduce((acc, curr) => acc + curr, 0)
    
    let apples = total
    capacity.sort((a, b) => b - a)
    let answer = 0
    
    for(let i = 0 ; i < capacity.length ; i++) {
        if(apples > 0) {
            apples -= capacity[i]
            answer += 1
        } else {
            break;
        }
    }
    
    return answer
};