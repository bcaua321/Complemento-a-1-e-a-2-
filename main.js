let decimal  = require('./Conversions/binaryToDecimal');
let bin = require('./Conversions/decimalToBinary');
let complementOne  = require('./Complements/complementOne');
let complementTwo  = require('./Complements/complementTwo');

// Numero desejado para fazer as operações
let x = 0;

// O argumento de complementOne vai ser o ponto de partida
let n = complementOne.complement(x);

// Irá receber um array que representa o complemento 1 
let nFinal = complementTwo.complement(n);

// irá printar no terminal;
let saida = `
  Número: ${x}
  Número em binário: ${bin.binary(x).join('')}
  Complemento a 1: ${n.join('')}
  Complemento a 2: ${nFinal.join('')}
  Complemento a 2 de ${x} em decimal: ${decimal.binaryToDecimal(nFinal)}
`

console.log(saida);