// function makeNegative(number) {
//     if (number > 0) {
//         console.log(number * -1)
//     } else if (number < 0) {
//         console.log(number)
//     } else {
//         console.log('Undefined')
//     }
// }

// makeNegative(2)

// const randomNumber = [1, -2, -4, 2]

// let sum = 0;
// for (let i = 0; i < randomNumber.length; i++) {
//     if (randomNumber[i] > 0) {
//     sum += randomNumber[i];
//     }
// }

// console.log(sum);

// function square(theSquire) {
//     console.log(theSquire ** 2)
// }

// square(3)

// const sumArray = [1, 2, 3]

// let sum = 0

// for (let i = 0; i < sumArray.length; i++) {
//     sum += sumArray[i];
// } 
// console.log(sum)

// let string = 'hello'
// let splitString = string.split('')
// let reverseArray = splitString.reverse()
// let joinArray = reverseArray.join('')


function stringReversal(str) {
    return str.split("").reverse().join("");
}

console.log(stringReversal("pizza"))

// console.log(splitString)
// console.log(reverseArray)
// console.log(joinArray)