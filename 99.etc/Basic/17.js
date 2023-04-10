// computeSquareRoot
function computeSquareRoot(num) {
  // TODO: 여기에 코드를 작성합니다.
  let result = 1;
  while (result ** 2 !== num) {
    if (Number((result ** 2).toFixed(2)) === num) {
      return Number(result.toFixed(2));
    }
    result = (result + num / result) / 2;
  }
  return Number(result.toFixed(2));
}
