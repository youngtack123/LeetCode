/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    
    if(tasks.length === 1) return -1
    
    let answer = 0
    let map = new Map()
    
    for(let task of tasks) {
        map.set(task, (map.get(task) || 0) + 1)
    }
    
    const taskArr = [...map.entries()]
    
    for(let i = 0 ; i < taskArr.length ; i++) {
        const [difficulty, count] = taskArr[i]
        
        if(count < 2) return -1
        
        let currentCount = count
        
        while(currentCount > 0) {
            
            currentCount -= 3
            answer++
            
            if(currentCount < 2 && currentCount > 0) {
                currentCount += 3
                answer--
                currentCount -= 2
                answer++
            }
        }
        // console.log(i, difficulty, answer)
    }
    
    return answer
};