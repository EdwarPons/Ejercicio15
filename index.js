function fibonacci (num) {
 if (num < 1) return [];
 else if (num == 1) return [1];

 fibonacciArray = [1, 1];

 for (let i = 0; i < num - 2; i++) {
  fibonacciArray = [...fibonacciArray, fibonacciArray[i] + fibonacciArray[i + 1]];
 }

 return fibonacciArray;
}

console.log(fibonacci(-20));