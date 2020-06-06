/*

    Knapsack Problem:
    +------------+---+---+---+---+---+
    | Weight(Kg) | 1 | 2 | 4 | 2 | 5 |
    +------------+---+---+---+---+---+
    |  Value($)  | 5 | 3 | 5 | 3 | 2 |
    +------------+---+---+---+---+---+

    N : number of items
    C : Capacity of Knapsack wieght
*/

// RECURSIVE SOLUTION
knapsack = (dynamicTable, weights, values, n, capacity) => {
    console.log(n + ' , ' + capacity);
    if (dynamicTable[3][1] && dynamicTable[3][1] != 0) {
        return dynamicTable[n - 1][capacity - 1];
    }
    let result = 0;
    if (n === 0 || capacity === 0) {
        result = 0;
    } else if (weights[n] >= capacity) {
        result = knapsack(weights, values, n - 1, capacity);
    } else {
        let temp1 = knapsack(weights, values, n - 1, capacity);
        let temp2 =
            values[n] + knapsack(weights, values, n - 1, capacity - weights[n]);
        result = temp1 > temp2 ? temp1 : temp2;
    }
    dynamicTable[n][capacity] = result;
    return result;
};
var n = 5;
var c = 10;
var dynamicTable = new Array(n).fill(new Array(c).fill(0));
knapsack(dynamicTable, [1, 2, 4, 2, 5], [5, 3, 5, 3, 2], n, c);

console.log(dynamicTable);
