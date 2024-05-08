/**
 * @param {number[][]} tasks
 * @return {number}
 */
const minimumEffort = (tasks) => {
    tasks.sort((a,b) =>  (b[1] - b[0]) - (a[1] - a[0]));

    let minimum = tasks[0][1];
    let actual = minimum - tasks[0][0];
    
    
    for(let i = 1; i < tasks.length; i++) {
        const nextMinEnergy = tasks[i][1];
        const nextActualEnergy = tasks[i][0];
        
        if(actual < nextMinEnergy) {
            minimum += nextMinEnergy - actual;
            actual = nextMinEnergy - nextActualEnergy;
        }
        else {
            actual -= nextActualEnergy;
        }
    }

    return minimum;
};