/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = parseInt(
        Math.abs(x)
            .toString()
            .split('')
            .reverse()
            .join('')
    );

    if (num > 0x7fffffff) return 0;

    return x < 0 ? -num : num;
};
