// 2. 수를 입력받아 각 자릿수를 모두 더한 값을 리턴해야 합니다.

function test2(num) {
  // TODO: 여기에 코드를 작성합니다.
  const strNum = String(num);
  let result = 0;
  for (let i = 0; i < String(num).length; i++) {
    if (strNum[i] === "-") {
      result -= Number(strNum[i + 1]);
      i++;
    } else {
      result += Number(strNum[i]);
    }
  }
  return result;
}
