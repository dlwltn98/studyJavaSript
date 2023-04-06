// readVertically
function readVertically(arr) {
  // code goes here
  let longStr = "";
  arr.forEach((ele) => {
    if (longStr.length < ele.length) {
      longStr = ele;
    }
  });

  let result = "";
  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] !== undefined) {
        result += arr[j][i];
      }
    }
  }

  return result;
}
