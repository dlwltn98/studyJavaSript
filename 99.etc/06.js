// 6. 피보나치 수열을 순차적으로 출력하는 클로저 형태의 함수를 작성해야 합니다.

function test6() {
  // TODO: 여기에 코드를 작성합니다.
  let num = 0;

  function calc(n) {
    if (n < 2) {
      return n;
    }
    return calc(n - 1) + calc(n - 2);
  }

  return function () {
    num++;
    // console.log("chk    : " , num)
    return calc(num - 1);
  };
}
