const numbersArr = [1, 6, -3, 5, 2, -8, 0, 4, 3];
let evenNums = [];
let oddNums = [];

for (let i = 0; i < numbersArr.length; i++) {
  if (numbersArr[i] > 0 && numbersArr[i] % 2 === 0) {
    evenNums.push(numbersArr[i]);
  } else if (numbersArr[i] < 0 && numbersArr[i] % 2 !== 0) {
    oddNums.push(numbersArr[i]);
  }
}
console.log(evenNums);
console.log(oddNums);