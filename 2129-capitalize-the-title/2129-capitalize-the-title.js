/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    const arr = title.split(' ').map(ele => ele.toLowerCase())
    
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i].length > 2) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
        }
    }
    
    return arr.join(' ')
};