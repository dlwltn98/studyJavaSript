// 1부터 n까지의 자연수 중에서 중복 없이 m개를 고른 수열이어야 하고, 길이가 m이어야 한다고 할 때, 만들 수 있는 바코드를 전부 배열에 담아 반환하는 함수를 작성하세요.
function test2(n, m) {
  // TODO: 여기에 코드를 작성하세요.
  let result = [];

  const dfs = (d, arr) => {
    if (d === m) {
      result.push(Number(arr.join("")));
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (arr.includes(String(i))) {
        continue;
      }
      arr.push(String(i));
      dfs(d + 1, arr);
      arr.pop();
    }
  };

  dfs(0, []);
  return result;
}
