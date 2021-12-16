// Complemento a dois irá add o bit 1 ao complemento a 1
exports.complement = (n) => {
  let arr = [...n]; // Para copiar todos os elementos do array, assim não será passado por referência

  // Variavel para iterar
  i = arr.length - 1;


  while(i != -1){
    if(arr[i] == 0){
      arr[i] = 1;
      break;
    }

    arr[i] = 0;
    i--;
  }

  return arr;
}

