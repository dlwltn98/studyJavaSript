// 04_bubbleSort
const bubbleSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      j--;
    }
  }
  return arr;
};
