function checkValid(matrix) {
    const n = matrix.length;
    const expectedSum = (n * (n + 1)) / 2; // 각 행과 각 열의 예상 합

    // 행 검사
    for (let i = 0; i < n; i++) {
        const rowSum = matrix[i].reduce((acc, curr) => acc + curr, 0);
        if (rowSum !== expectedSum) {
            return false;
        }
    }

    // 열 검사
    for (let j = 0; j < n; j++) {
        let colSum = 0;
        for (let i = 0; i < n; i++) {
            colSum += matrix[i][j];
        }
        if (colSum !== expectedSum) {
            return false;
        }
    }

    // 각 행과 각 열이 1부터 n까지의 모든 정수를 포함하는지 확인
    for (let num = 1; num <= n; num++) {
        for (let i = 0; i < n; i++) {
            if (!matrix[i].includes(num)) return false; // 각 행에 숫자가 있는지 확인
            let foundInCol = false;
            for (let j = 0; j < n; j++) {
                if (matrix[j][i] === num) {
                    foundInCol = true;
                    break;
                }
            }
            if (!foundInCol) return false; // 각 열에 숫자가 있는지 확인
        }
    }

    return true;
}
