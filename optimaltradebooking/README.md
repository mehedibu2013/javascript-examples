# Max Profit Problem

This JavaScript code solves the classic "Best Time to Buy and Sell Stock" problem. The goal is to find the maximum profit that can be made by buying and selling a stock once, given an array of prices representing the stock's price on each day.

## Function: `maxProfit(prices)`

-   **Input:** An array `prices` of numbers, where `prices[i]` is the price of the stock on day `i`.
-   **Output:** The maximum profit that can be obtained.

## Implementation Details

-   The function iterates through the `prices` array, keeping track of the minimum price seen so far (`minPrice`) and the maximum profit (`maxProfit`).
-   In each iteration, it updates `minPrice` if the current price is lower.
-   It calculates the potential profit (`prices[i] - minPrice`) and updates `maxProfit` if the potential profit is greater than the current `maxProfit`.

## Example Usage

```javascript
const prices = [6, 8, 1, 2, 30, 19];
console.log(maxProfit(prices)); // Output: 29

const prices2 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices2)); // Output: 5

const prices3 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices3)); // Output: 0
```

## Running the code

To run this code, make sure you have Node.js installed. Save the JavaScript code in a file (e.g., `maxprofit.js`) and then run the following command in your terminal:

```bash
node maxprofit.js
```

This will execute the code and display the calculated maximum profits for the given test cases.
```
