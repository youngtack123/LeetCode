/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */

var pickGifts = function(gifts, k) {
    for (let i = 0; i < k; i++) {
        const maxIndex = gifts.indexOf(Math.max(...gifts)); // 가장 큰 값의 인덱스 찾기
        const maxSqrt = Math.floor(Math.sqrt(gifts[maxIndex])); // 가장 큰 값의 제곱근 계산
        
        gifts.splice(maxIndex, 1); // 가장 큰 값 제거
        gifts.unshift(maxSqrt); // 제곱근 값을 배열 맨 앞에 추가
    }
    
    return gifts.reduce((acc, curr) => acc + curr, 0)
};