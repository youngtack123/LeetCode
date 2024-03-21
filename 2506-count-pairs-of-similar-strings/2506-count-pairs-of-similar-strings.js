/**
 * @param {string[]} words
 * @return {number}
 */
// var similarPairs = function(words) {
    
//     let answer = 0
    
//     words.sort((a, b) => a.length - b.length);
    
//     for(let i = 0 ; i < words.length - 1 ; i++) {
        
//         answer++
        
//         for(let j = 0 ; j < words[i].length ; j++) {
//             if(!words[i+1].includes(words[i].charAt(j))) {
//                 answer--
//                 break
//             }
//         }   

//     }
    
//     return answer
// };

var similarPairs = function ( words ) {
  words = words.map( w => [...new Set( w )].sort().join( "" ) )
  let count = 0
  for ( let i = 0; i < words.length; i++ ) {
    for ( let j = i + 1; j < words.length; j++ ) {
      if ( words[i] === words[j] ) {
        count++
      }
    }
  }
  return count
}
