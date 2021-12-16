exports.binary = (n) => {
  let bin = [];
  
  while(n != 0){
    // Para inverter a ordem, ex: 4 em binario
    // 4 % 2 -> 0 | 2 % 2 -> 0 | 1 % 2 -> 1
    // [1, 0, 0]
    bin.unshift(n % 2);
    n = parseInt(n / 2);
  }

  // Será considerado 7 bits, sem sinal, ou seja de 0, até 127,
  i = 7 - bin.length; // preencher o que falta com 0
  
  while(i != 0){
    bin.unshift(0);
    i--;
  }

  return bin;
}

