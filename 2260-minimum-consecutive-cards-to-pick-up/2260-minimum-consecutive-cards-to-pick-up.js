/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
    let map = new Map()
    let count = Infinity

    for (let i = 0; i < cards.length; i++) { 
        let card = cards[i]; // Get the current card
        if (map.has(card)) { // If the card is already in the map
            count = Math.min(count, i - map.get(card) + 1); // calculate the minimum count
            map.set(card, i); // update the card's index in the map
        } else {
            map.set(card, i); // If the card is not in the map, add it.
        }
    }
    console.log(map)
    if (count === Infinity) return -1; // If count is still Positive ionfinity, return -1;
    return count; // Return the minimum count;
};