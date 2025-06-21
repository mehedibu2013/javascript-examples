
function maxProfit(prices) {
    if (prices.length === 0) {
        return "No prices provided";
    }
    if (!prices.every((price) => typeof price === "number")) {
        return "Prices must be numbers";
    }
   
    if (prices.length === 1) {
        return "No profit can be made";
    }
    if (!Array.isArray(prices)) {
        return "Prices must be an array";
    }

    
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
}

const prices = [6, 8, 1, 2, 30, 19];
console.log(maxProfit(prices)); // Expected: 29
const prices2 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices2)); // Expected: 5
const prices3 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices3));
const prices4 = [];
console.log(maxProfit(prices4));
const prices5 = [1];
console.log(maxProfit(prices5));
const prices6 = [1, "h"];
console.log(maxProfit(prices6));
const prices7 = ["hello"];
console.log(maxProfit(prices7));
