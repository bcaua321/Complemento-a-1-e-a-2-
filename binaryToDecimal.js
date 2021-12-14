exports.binaryToDecimal = (n) => {

  let j = 0, soma = 0;
  for(let i =  n.length - 1; i >= 0; i--){
    soma += n[i]*2**j;
    j++;
  }

  return soma;
}