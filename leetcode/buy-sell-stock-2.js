/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

    Input: [7,1,5,3,6,4]
    Output: 7
    Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

    Input: [1,2,3,4,5]
    Output: 4
    Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let avgBuy = 0;
    let avgSell = 0;
    let bought = false;
    let buyPrice = 0;
    let profit = 0;
    //[7,1,5,3,6,4]
    //[  L,C,N
    for (let i = 0; i < prices.length; i++) {
        let current = prices[i];
        let next = prices[i + 1] ? prices[i + 1] : 0;
        let last = prices[i - 1] ? prices[i - 1] : 0;
        // console.log(`index: ${i}, L:${last}, C:${current}, N: ${next}`);
        if (bought) {
            // console.log('sell chance');
            currentProfit = current - buyPrice;
            nextProfit = next - buyPrice;
            if (currentProfit >= nextProfit) {
                //   console.log('sell at:', current);
                bought = false;
                profit += current - buyPrice;
            }
        }

        if (current <= next && !bought) {
            //     console.log('bough at:', current);
            bought = true;
            buyPrice = current;
        }
        // console.log('---------------');
    }
    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
