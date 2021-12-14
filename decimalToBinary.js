exports.binary = (n) => {
  let array = [];
  
  while(n != 0){
    array.unshift(n % 2);
    n = parseInt(n / 2);
  }

  i = 7 - array.length;

  while(i != 0){
    array.unshift(0);
    i--;
  }

  return array;
}

