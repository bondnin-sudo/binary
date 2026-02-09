const binaryArrayToNumber = arr => {
  let temp = 8
  let sum = 0 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      sum += temp
      temp /= 2
    } else {
      temp /= 2
    }
  }
  return sum;
};