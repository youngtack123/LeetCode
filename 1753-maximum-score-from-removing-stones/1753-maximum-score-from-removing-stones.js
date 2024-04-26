/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
function maximumScore(a, b, c) {
    const piles = [a, b, c].sort((a, b) => a - b);

    let score = 0;
    // Repeat until there are fewer than two non-empty piles
    while (piles[1] > 0 && piles[2] > 0) {
        // Take one stone from the two largest piles
        score++;
        piles[1]--;
        piles[2]--;
        // Sort the piles again
        piles.sort((x, y) => x - y);
    }

    return score;
}
