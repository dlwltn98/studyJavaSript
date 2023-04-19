// tiling
let tiling = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  const memo = [0, 1, 2];

  const aux = (size) => {
    // memo
    if (memo[size] !== undefined) return memo[size];
    if (size <= 2) return memo[n];
    memo[size] = aux(size - 1) + aux(size - 2);
    return memo[size];
  };
  return aux(n);
};
