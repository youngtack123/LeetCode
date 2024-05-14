/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
    
    let set = new Set([...cards])
    
    if(set.size === cards.length) return -1
    
    let left = 0
    let minCards = Infinity
    let obj = {}
    
    for(let right = 0 ; right < cards.length ; right++) {
        
        obj[cards[right]] = (obj[cards[right]] || 0) + 1
        
        while(obj[cards[right]] > 1) {
            if(obj[cards[left]] === obj[cards[right]]) {
                minCards = Math.min(minCards, right - left + 1)
            }
            
            obj[cards[left]]--
            left++
        }
    }
    
    return minCards
};