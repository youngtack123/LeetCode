/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
const countBalls = (lowLimit, highLimit) =>
    Math.max(
        ...new Array(highLimit - lowLimit + 1)
            .fill()
            .reduce(
                (acc, _, idx) =>
                    (sum => acc.set(sum, (acc.get(sum) || 0) + 1))(
                        [...`${lowLimit + idx}`].map(Number).reduce((a, c) => a + c),
                    ),
                new Map(),
            )
            .values(),
    );