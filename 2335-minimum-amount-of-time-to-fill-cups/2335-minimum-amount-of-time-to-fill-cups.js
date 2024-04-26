var fillCups = function(amount) {
    let count = 0

    while (true) {
        amount.sort((a, b) => b - a)

        if (amount[0] > 0 && amount[1] > 0) {
            amount[0] --
            amount[1] --
            count ++
            continue
        }

        if (amount[0] > 0) {
            amount[0] --
            count ++
            continue
        }

        break
    }
    
    return count
};