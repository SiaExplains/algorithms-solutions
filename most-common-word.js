const myString = 'the cat sat on the mat';

const getMostCommonWord = (input) => {
    const terms = input.split(' ');
    let counters = new Map();
    for (let i = 0; i < terms.length; i++) {
        if (counters.has(terms[i])) {
            counters.set(terms[i], counters.get(terms[i]) + 1);
        } else {
            counters.set(terms[i], 1);
        }
    }

    let max = 0;
    let key = 0;
    for (let term of counters.entries()) {
        if (max < term[1]) {
            max = term[1];
            key = term[0];
        }
    }
    return key;
};

console.log(getMostCommonWord(myString)); // the
