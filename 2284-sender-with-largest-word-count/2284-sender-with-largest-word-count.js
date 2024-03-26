// /**
//  * @param {string[]} messages
//  * @param {string[]} senders
//  * @return {string}
//  */

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
        // KEY POINT: strings can be compared lexicographically using relational operators
        if (count > maxCount || (count === maxCount && sender > maxSender)) { 
            maxCount = count;
            maxSender = sender;
        }
    }
    
    return maxSender;
};
