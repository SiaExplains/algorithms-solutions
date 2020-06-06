/*
    NOTES:
    
    * We just use RADIX-SORT for Numbers!
    * Just Positive Number (non-negative)

    ALGORITHM:

    1. Find the biggest number
    2. Needs to pass (N digit of Max Number) step!
    3. LeftPad all other numbers to equal N Digit
    4. Declare 10 Bcuket (0 to 9)
    5. Sorting Digits from right to left (fill bucket and extract)
    6. Remove Zero from each numbers LeftTrim('0')
*/

const numbers = [40, 30, 20, 10, 400, 3, 2, 100, 1];

const getLocation = (num, place, max) => {
    const str = num.toString();
    const size = str.length;
    const diff = max - size;
    return str[place - diff] || 0;
};
const radixSort = arr => {
    let max = numbers
        .map(n => n.toString())
        .sort((a, b) => {
            return b.length - a.length;
        })[0].length;

    const buckets = new Array(10).fill().map(() => []);
    for (let i = max - 1; i >= 0; i--) {
        while (arr.length) {
            const current = arr.shift();
            buckets[getLocation(current, i, max)].push(current);
        }

        for (let j = 0; j < 10; j++) {
            while (buckets[j].length) {
                arr.push(buckets[j].shift());
            }
        }
    }

    return arr;
};
console.table(radixSort(numbers));
