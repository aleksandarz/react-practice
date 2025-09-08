const productsPrices = [100, 200, 50];

const initialValue = 0;
const totalSumOfPrices = productsPrices.reduce((acc, currentPrice) => acc + currentPrice, initialValue);
console.log(totalSumOfPrices);

const arrayOfWords = ["Automobile", "industry", "is", "awesome"];
const initialWord = "";
const words = arrayOfWords.reduce((acc, currentWord) => acc + " " + currentWord, initialWord);
console.log(words);