/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    const letters = s.split('');
    let value = 0;
    for(let i=0;i<letters.length;i++) {
        const currentChar = map[letters[i]];
        const nextChar = map[ letters[ i <= letters.length -2? i+ 1: i]];
        if(currentChar < nextChar) {
            value += nextChar - currentChar;
            i++;
        }
        else {
            value += currentChar;
        }
    }

    return value;
};


console.log(romanToInt('III'));

console.log(romanToInt('LVIII'));

console.log(romanToInt('MCMXCIV'));