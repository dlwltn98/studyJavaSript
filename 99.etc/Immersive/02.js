// fibonacci + memo

function fibonacci(n) {
  // TODO: 여기에 코드를 작성합니다.
  let memo = [0, 1];

  const fiboMemo = (num) => {
    if (memo[num] !== undefined) return memo[num];

    memo[num] = fiboMemo(num - 1) + fiboMemo(num - 2);
    return memo[num];
  };

  return fiboMemo(n);
}
