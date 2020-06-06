const readline = require('readline');

fibonacci = n => {
    if (n === 1 || n === 2) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
};

async function algorithm_rec_fib() {
    return new Promise((res, rej) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('Enter a number: ', answer => {
            // TODO: Log the answer in a database
            if (!isNaN(+answer)) {
                console.log(`Fibonacci: ${fibonacci(parseInt(answer))}`);
            }

            res();
            rl.close();
        });
    });
}

module.exports = {
    algorithm_rec_fib
};
