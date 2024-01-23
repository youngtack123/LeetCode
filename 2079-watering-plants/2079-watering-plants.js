/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    
    let pointer = -1;
    let currentCap = capacity;
    let total = 0;
    
    for(let i = 0 ; i < plants.length ; i++) {
        if(i === 0) {
            currentCap = capacity - plants[i]
            pointer = i;
            total++;
        } else {
            // 충분한 물이 있을 경우
            
            if(plants[i] <= currentCap) {
                currentCap = currentCap - plants[i]
                pointer = i
                total += 1
            }
            // 충분한 물이 없을 경우
            else {
                const refillDistance = pointer + 1
                pointer = -1
                total += refillDistance
                
                // 물 채운 후 다시 이동 로직
                pointer = i
                currentCap = capacity
                currentCap = currentCap - plants[i]
                total += Math.abs(-1 - i)
            }
        }
    }
    return total
};