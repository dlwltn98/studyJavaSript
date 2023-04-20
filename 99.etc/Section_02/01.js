// 정사각형의 크기가 가장 크려면 정사각형 한 변은 몇 cm가 되어야 하는지 구하는 함수를 작성하세요.
function test1(A, B) {
  // TODO: 여기에 코드를 작성하세요.
  let samllNum = 0;
  if (A > B) samllNum = B;
  else samllNum = A;

  let result = 0;
  for (let i = samllNum; i >= 1; i--) {
    // console.log(i, "   ", A % i === 0 && B % i === 0)
    if (A % i === 0 && B % i === 0) {
      result = i;
      break;
    }
  }

  return result;
}
