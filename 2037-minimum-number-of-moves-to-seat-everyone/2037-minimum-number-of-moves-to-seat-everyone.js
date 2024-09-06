/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(s, st) {
    s.sort((a,b) => a-b);   
    st.sort((a,b) => a-b);   
    return s.reduce((ac, x, i) => ac + Math.abs(x - st[i]),0);
};