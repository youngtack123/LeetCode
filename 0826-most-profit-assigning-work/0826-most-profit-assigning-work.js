/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
  let res = 0
  
  for(let i = 0 ; i < worker.length ; i++){
      let max = 0
      
      for(let j = 0 ; j < difficulty.length ; j++){
          if(worker[i] >= difficulty[j]){
              max = Math.max(max, profit[j]);
          }
      }
      res += max;
  }    
  return res;
};