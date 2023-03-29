// 01. orderOfPresentation

function orderOfPresentation(N, K) {
  // TODO: 여기에 코드를 작성합니다.
  let result = 0;
  let factorial = (num) => {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
  };

  const chk = Array(N + 1).fill(0);
  for (let i = 0; i < K.length; i++) {
    chk[K[i]] = 1;

    const copyArr = chk.slice(1, K[i]);
    const chkCnt = copyArr.filter((ele) => ele === 0);
    // console.log(chkCnt)
    const cnt = chkCnt.length * factorial(N - i - 1);
    result += cnt;
  }
  return result;
}
