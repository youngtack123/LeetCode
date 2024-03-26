// /**
//  * @param {string[]} messages
//  * @param {string[]} senders
//  * @return {string}
//  */
// var largestWordCount = function(messages, senders) {
    
//     let map = new Map()
    
//     let counts = []
    
//     for(let i = 0 ; i < messages.length ; i++) {
//         const tmp = messages[i].split(' ').length
//         counts.push(tmp)
//     }
    
//     for(let i = 0 ; i < senders.length ; i++) {
//         map.set(senders[i], (map.get(senders[i]) || 0) + counts[i])
//     }
    
//     const sorted = [...map.entries()].sort((a , b) => b[1] - a[1])
    
//     let maxSecondIndex = 0
    
//     for (const entry of sorted) {
//         maxSecondIndex = Math.max(maxSecondIndex, entry[1]);
//     }
    
//     const answer = []
    
//     for(const entry of sorted) {
//         if(entry[1] === maxSecondIndex) {
//             answer.push(entry)
//         }
//     }
    
//     if(answer.length === 1) {
//         return answer[0][0]
//     } else {
//         const sortedAnswer = answer.sort((a , b) => b[0].localeCompare(a[0]))
        
//         return sortedAnswer[0][0]
//     }
    
    
    
// };
var largestWordCount = function(messages, senders) {
    let wordCounts = new Map();
    
    // Count the words in each message and accumulate the counts by sender
    for (let i = 0; i < messages.length; i++) {
        const sender = senders[i];
        const wordCount = messages[i].split(' ').length;
        wordCounts.set(sender, (wordCounts.get(sender) || 0) + wordCount);
    }
    
    let maxCount = 0;
    let maxSender = '';
    
    // Find the sender with the largest word count
    for (const [sender, count] of wordCounts.entries()) {
        if (count > maxCount || (count === maxCount && sender > maxSender)) {
            maxCount = count;
            maxSender = sender;
        }
    }
    
    return maxSender;
};
