let complementOne = require('./complementOne');
let y = complementOne.complement(4);

function complementTwo(n) {
  i = n.length - 1;
  for(;;){
    if(n[i] == 0){
      n[i] = 1;
      break;
    }

    n[i] = 0;
    i--;
  }

  return n;
}

let decimal = require('./binaryToDecimal');
console.log(decimal.binaryToDecimal(complementTwo(y)));