const binaryArrayToNumber = arr => {
  let temp = 1
  let sum = 0
  for ( let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 1) {
      sum += temp
    }
    temp += temp 
  }
  return sum 
};