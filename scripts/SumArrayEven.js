let numbers = [-2, 3, 7, 8, -1, 4, 2];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0 && numbers[i] % 2 === 0) {
    sum += numbers[i];
  }
}

console.log(sum);
