/**
 * @param {number[]} nums
 * @return {number}
 */
var minLengthAfterRemovals = function (a) {
  let n = a.length

  let count = 0
  let half = Math.trunc(n / 2)
  for (let i = 0, j = half; i < half && j < n; ) {
    let L = a[i] // left = start to mid
    let R = a[j] // right = mid to end

    if (L < R) {
      i++
      j++
      count += 2 // two elements matched - to be removed
    } else {
      j++
    }
  }
  return n - count // remaining elements
}