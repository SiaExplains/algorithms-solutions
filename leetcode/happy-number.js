/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    try {
        if (n === 1) {
            return true;
        }

        let digits = n.toString().split('');

        let sum = 0;
        digits.forEach(d => {
            sum += (+d) ** 2;
        });

        return isHappy(sum);
    } catch (err) {
        return false;
    }
};

console.log(isHappy(8));
