// TASK: define object 'calc', with next properties and values:
// 'add' - a function, which returns the sum of 2 numbers
// 'sub' - a function, which returns the subtraction of 2 numbers
// 'mult' - a function, which returns the multiplication of 2 numbers
// 'div' - a function, which returns the division of 2 numbers
let calc = {
    add: function add(x, y){
        return x+y;
    },
    sub: function sub(x, y){
        return x-y;
    },
    mult: function mult(x, y){
        return x*y;
    },
    div: function div(x, y){
        return x/y;
    }
};
// ---> YOUR CODE HERE <---

// TEST:
let x = 6, y = 3;
console.log(calc.add(x, y)); // 9
console.log(calc.sub(x, y)); // 3
console.log(calc.mult(x, y)); // 18
console.log(calc.div(x, y)); // 2