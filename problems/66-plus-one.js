/**
 * @param {number[]} digits
 * @return {number[]}
 */

//to be optimised

var plusOne = function(digits) {
    let string = digits.join('');
    console.log(string);
    let num = BigInt(string);
    num++;
    return num.toString().split('')
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,8,9,9]));