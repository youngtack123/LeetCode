/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function(plants, capacityA, capacityB) {
    let refillCount = 0;
    let curCapA = capacityA;
    let curCapB = capacityB;
    
    for(let i = 0, j = plants.length - 1 ; i< plants.length && j > 0 ; i++, j--) {
        
        // 동시에 같은 위치에 있을 경우
        if(i === j) {
            const oneWithMoreWater = Math.max(curCapA, curCapB) === curCapA ? 'Alice' : 'Bob';
            
            if(oneWithMoreWater === 'Bob' && plants[j] > curCapB) {
                refillCount++;
            }
            else if(oneWithMoreWater === 'Alice' && plants[i] > curCapA) {
                refillCount++;
            }
            break;
        }
        
        // 충분한 물이 있을 경우 - Alice
        if(plants[i] <= curCapA) {
            curCapA = curCapA - plants[i]
        } else {
            curCapA = capacityA;
            curCapA = curCapA - plants[i]
            refillCount++;
        }
        
        // 충분한 물이 있을 경우 - Bob
        if(plants[j] <= curCapB) {
            curCapB = curCapB - plants[j]
        } else {
            curCapB = capacityB;
            curCapB = curCapB - plants[j]
            refillCount++;
        }
        
        if(j - i === 1) {
            break
        }
    }
    return refillCount
};
