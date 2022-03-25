function maxProfit(arr) {
  let min = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i])
    maxProfit = Math.max(maxProfit, arr[i] - min)
  }

  return maxProfit;
}

let stocks = [20, 15, 5, 10, 7, 25]

console.log(maxProfit(stocks))