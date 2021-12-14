let binary = require('./decimalToBinary');

exports.complement = (n) => {
  let numeroEmBinario = binary.binary(n);
  
  let complementOne = numeroEmBinario.map((n) => {
    if(n == 1){
      return 0;
    } 
    return 1;
  });

  return complementOne;
}
