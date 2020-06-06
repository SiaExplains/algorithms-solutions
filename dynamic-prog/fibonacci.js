fibonacciBottomUp = n => {
    if (n == 1 || n == 2) {
        return 1;
    }
    let pool = new Array(n + 1).fill(0);
    pool[0] = 1;
    pool[1] = 1;
    for (let i = 2; i <= n; i++) {
        pool[i] = pool[i - 1] + pool[i - 2];
    }
    return pool[n];
};
console.log(`bottomUp : ${fiboBottomUp(43)}`);

console.log(fibonacciBottomUp(100, new Array(600).fill(0)));
