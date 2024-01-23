/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    
    let pointer = -1; // initializing pointer variable to the refill point: -1
    let currentCap = capacity;
    let total = 0;
    
    for(let i = 0 ; i < plants.length ; i++) {
        
        // when there is enough water
        if(plants[i] <= currentCap) {
            currentCap = currentCap - plants[i]
            pointer = i
            total += 1
        }
        // when there is NOT enought water
        else {
            // go back to refill
            const refillDistance = pointer + 1
            pointer = -1
            currentCap = capacity
            total += refillDistance

            // get back to the point after the refill
            pointer = i
            currentCap = currentCap - plants[i]
            total += Math.abs(-1 - i)
        }
    }
    return total
};