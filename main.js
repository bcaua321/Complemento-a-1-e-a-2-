const { binaryToDecimal } = require('./binaryToDecimal.js');
let  complementOne  = require('./complementOne.js');
let  complementTwo  = require('./complementTwo.js');
let  binary  = require('./decimalToBinary.js');

let n = complementOne.complement(4);
let nFinal = complementTwo.complement(n);

console.log(binaryToDecimal(nFinal));