/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    
    let map = new Map()
    
    if(bills[0] !== 5) return false
    
    for(let bill of bills) {
        if(bill === 5) {
            map.set(bill, (map.get(bill) || 0) + 1)
        }
        else if(bill === 10) {
            if(map.get(5) > 0) {
                map.set(bill, (map.get(bill) || 0) + 1)
                map.set(5, map.get(5) - 1)
            } else {
                return false
            }
        } else {
            if(map.get(5) >= 1 && map.get(10) >= 1) {
                map.set(bill, (map.get(bill) || 0) + 1)
                map.set(5, map.get(5) - 1)
                map.set(10, map.get(10) - 1)
            }
            else if(map.get(5) >= 3) {
                map.set(bill, (map.get(bill) || 0) + 1)
                map.set(5, map.get(5) - 3)
            } else {
                return false
            }
        }
    }
    return true
};