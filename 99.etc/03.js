// 3. 수를 입력받아 각 자리의 수를 곱한 결과물들이 한자리 수가 될 때까지 반복적으로 곱한 후, 최후의 한 자리 수를 리턴해야 합니다.

function test3(num) {
  // TODO: 여기에 코드를 작성합니다.
  while (num > 10) {
    let result = 1;
    for (let i of String(num)) {
      result *= i;
    }
    console.log(result);
    num = result;
  }
  return num;
}
