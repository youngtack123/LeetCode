var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    let l = [];
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            l.push([i,j]);
        }
    }
    l.sort((x,y)=>Math.abs(x[0] - rCenter) + Math.abs(x[1] - cCenter)-(Math.abs(y[0] - rCenter) + Math.abs(y[1] - cCenter)));
    return l;
};