let complementOne = require('./complementOne');
let y = complementOne.complement(4);

// Complemento a dois irá add o bit 1 ao complemento a 2
exports.complement = (n) => {
  i = n.length - 1;

  // não se sabe onde irá parar
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

