// findBugInApples
function findBugInApples(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "B") {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
}
