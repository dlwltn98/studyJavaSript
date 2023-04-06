// superIncreasing
function superIncreasing(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (sum >= arr[i]) {
      return false;
    }
    sum += arr[i];
  }
  return true;
}
